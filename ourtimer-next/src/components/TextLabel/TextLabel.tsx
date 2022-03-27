export const TextLabel = ({ children: label }: TextLabelProps) => (
  <span className="text-stone-400 italic text-center">
    { label }
  </span>
)

export interface TextLabelProps {
	children: string
}