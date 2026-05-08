type SecondaryButtonProps = {
  text: string;
  href?: string;
  width?: string;
  height?: string;
};

export default function SecondaryButton({
  text,
  href = "#",
  width = "auto",
  height = "auto",
}: SecondaryButtonProps) {
  return (
    <div
      className="relative inline-flex rounded-full p-0.5"
      style={{ width, height }}
    >
      <div className="absolute -inset-0.5 rounded-full bg-linear-to-r from-[#056E7C] to-[#46B6A0] shadow-[0_0_12px_#00A9BD]" />

      <a
        href={href}
        className="relative z-10 flex h-full w-full items-center justify-center rounded-full bg-linear-to-r from-[#00061D] to-[#0B1F2A] px-5 py-2.5 text-sm md:text-lg"
      >
        {text}
      </a>
    </div>
  );
}