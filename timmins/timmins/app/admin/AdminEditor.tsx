"use client";

/**
 * Plain text editor for structured/format fields (pipe-separated, JSON, etc.)
 * Use AdminRichEditor for rich text (bold, lists, etc.)
 */
type AdminEditorProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  minHeight?: number;
};

export default function AdminEditor({
  value,
  onChange,
  placeholder,
  rows = 4,
  minHeight,
}: AdminEditorProps) {
  const height = minHeight ?? Math.max(80, rows * 24);
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="admin-input"
      style={{
        minHeight: height,
        fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, monospace",
        fontSize: "0.9rem",
      }}
    />
  );
}
