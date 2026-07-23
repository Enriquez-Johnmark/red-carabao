import { Compass } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export function BookingDialog({ label = 'Apply for an expedition' }: { label?: string }) {
  return (
    <Dialog>
      <DialogTrigger render={<Button size="lg" className="cta-button" />}>
        <Compass data-icon="inline-start" />
        {label}
      </DialogTrigger>
      <DialogContent className="booking-dialog">
        <DialogHeader>
          <p className="eyebrow">APPLICATIONS ARE COMING</p>
          <DialogTitle className="dialog-title">Future expeditions will open soon.</DialogTitle>
          <DialogDescription>
            We’re preparing the next application experience. Until then, explore Island Crash and
            keep Coron on your horizon.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Keep exploring</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
