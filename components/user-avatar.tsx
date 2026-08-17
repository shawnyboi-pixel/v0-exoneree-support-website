import { User } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

interface UserAvatarProps {
  image?: string | null
  name?: string | null
  className?: string
  iconClassName?: string
}

export function UserAvatar({ image, name, className, iconClassName }: UserAvatarProps) {
  return (
    <Avatar key={image ?? 'no-image'} className={cn('shadow-sm', className)}>
      <AvatarImage src={image ?? undefined} alt={name ? `${name}'s profile photo` : 'Profile photo'} />
      <AvatarFallback className="bg-gradient-to-br from-accent to-accent/60" delayMs={image ? 600 : 0}>
        <User className={cn('text-accent-foreground', iconClassName)} />
      </AvatarFallback>
    </Avatar>
  )
}
