type PrimaryButtonProps = {
  text: string;
  href?: string;
  width?: string;
  height?: string;
};

export default function PrimaryButton({
  text,
  href = "#",
  width = "auto",
  height = "auto",
}: PrimaryButtonProps) {
  return (
    <div
      className="relative inline-flex rounded-full p-0.5"
      style={{ width, height }}
    >
      <div className="absolute -inset-0.5 rounded-full bg-linear-to-r from-[#45B6A0] to-[#12ACB5] shadow-[0_0_12px_#00A9BD]" />

      <a
        href={href}
        className="relative z-10 flex h-full w-full items-center justify-center rounded-full bg-linear-to-r from-[#00A9BD] to-[#1D553A] px-5 py-2.5 text-sm md:text-lg"
      >
        {text}
      </a>
    </div>
  );
}