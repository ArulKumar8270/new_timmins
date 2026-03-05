import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import DynamicClassPage from "./DynamicClassPage";
import type { CourseContent } from "@/lib/course-content";

export async function generateStaticParams() {
  try {
    const { data } = await supabase.from("public_class_sessions").select("slug").limit(500);
    const slugs = [...new Set((data || []).map((r) => r.slug))];
    if (slugs.length === 0) {
      return [{ slug: "embedded-linux-system-internals" }];
    }
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [{ slug: "embedded-linux-system-internals" }];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data: sessions } = await supabase
    .from("public_class_sessions")
    .select("course_name, domain")
    .eq("slug", slug)
    .limit(1);

  if (!sessions?.[0]) return { title: "Course Not Found" };
  const { course_name, domain } = sessions[0];
  return {
    title: `${course_name} | Timmins Training`,
    description: `${course_name} - ${domain}. Practitioner-led engineering training. HRDC Claimable.`,
  };
}

export default async function PublicClassSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [sessionsRes, courseContentRes] = await Promise.all([
    supabase.from("public_class_sessions").select("*").eq("slug", slug).order("date", { ascending: true }),
    supabase.from("course_content").select("content").eq("slug", slug).maybeSingle(),
  ]);

  const { data: sessions, error } = sessionsRes;
  if (error || !sessions || sessions.length === 0) {
    notFound();
  }

  const sessionIds = sessions.map((s) => s.id);
  const sessionContentRes = await supabase.from("session_content").select("session_id, content").in("session_id", sessionIds);
  const courseData = !courseContentRes.error && courseContentRes.data?.content ? (courseContentRes.data.content as CourseContent) : null;

  const contentBySessionId: Record<string, CourseContent> = {};
  sessions.forEach((s) => {
    const row = (sessionContentRes.data || []).find((r) => r.session_id === s.id);
    if (row?.content) contentBySessionId[s.id] = row.content as CourseContent;
    else if (courseData) contentBySessionId[s.id] = courseData;
  });

  return <DynamicClassPage sessions={sessions} contentBySessionId={contentBySessionId} courseContentFallback={courseData} />;
}
