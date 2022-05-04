export const TextLabel = ({ children: label }: TextLabelProps) => (
  <span className="text-stone-400 italic text-center font-normal">
    { label }
  </span>
)

export interface TextLabelProps {
  children: string
}
