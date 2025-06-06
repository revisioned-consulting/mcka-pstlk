import { cn } from '@/lib/utils'

export const ContentPlaceholder = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'bg-gray-3 dark:bg-dark-tremor-background-subtle relative h-full overflow-hidden rounded',
        className
      )}
    >
      <svg
        className="stroke-gray-6 absolute inset-0 h-full w-full dark:stroke-gray-700"
        fill="none"
      >
        <defs>
          <pattern id="pattern-1" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
          </pattern>
        </defs>
        <rect stroke="none" fill="url(#pattern-1)" width="100%" height="100%"></rect>
      </svg>
    </div>
  )
}
