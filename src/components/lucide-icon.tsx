import { icons, LucideProps } from 'lucide-react'

interface IconProps extends LucideProps {
  name: keyof typeof icons
}

const LucideIcon = ({ name, ...props }: IconProps) => {
  const Icon = icons[name]

  return <Icon {...props} />
}

export default LucideIcon
