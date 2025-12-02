interface LabeledBoxProps {
  label: string;
  bottomLabel: string;
  children: React.ReactNode;
}

export default function LabeledBox({
  label,
  bottomLabel,
  children,
}: LabeledBoxProps) {
  return (
    <div className="relative w-full">
      <span className="absolute -top-2 left-3 bg-[#2b303f] px-2 text-xs text-gray-400 ">
        {label}
      </span>
      <div className="border border-gray-600 rounded-lg p-3 pt-3 pb-3">
        {children}
      </div>
      <span className="absolute -bottom-2 top-11 left-1/2 -translate-x-1/2 bg-[#2b303f] px-2 text-[10px] text-blue-400">
        {bottomLabel}
      </span>
    </div>
  );
}
