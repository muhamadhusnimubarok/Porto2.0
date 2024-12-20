import { cn } from "@/lib/utils"
import { useRef } from "react"
import useIsomorphicLayoutEffect from "@/hooks/UseIsomorphicLayoutEffect"
import gsap from "gsap"
import { Logo } from "@/components/LogoIcon"

interface PreloadProps {
  endedLoading: boolean
}

export default function Preload({ endedLoading }: PreloadProps) {
  const counterRef = useRef<HTMLDivElement>(null)

  // Cek untuk loading selesai
  if (endedLoading) {
    return null;  // Ini akan menyembunyikan komponen ketika loading selesai
  }

  return (
    <div
      className={cn(
        "flex min-h-screen w-full items-center justify-center opacity-100 transition-all duration-700 ease-in-out",
        endedLoading && "opacity-0"
      )}
    >
      <div className="stroke">
        <Logo />
        <div className="text-center font-semibold" ref={counterRef}>
          0%
        </div>
      </div>
    </div>
  )

}
