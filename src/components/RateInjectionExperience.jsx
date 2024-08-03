/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3sEVzd8Pa3s
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function RateInjectionExperience() {
  return (
    <Card className="w-full max-w-md mx-auto p-6">
      <CardHeader>
        <CardTitle>Califique su experiencia</CardTitle>
        <CardDescription>Ayúdanos a mejorar nuestros servicios de salud compartiendo sus comentarios.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-center gap-2">
          <StarIcon className="w-6 h-6 fill-primary" />
          <StarIcon className="w-6 h-6 fill-primary" />
          <StarIcon className="w-6 h-6 fill-primary" />
          <StarIcon className="w-6 h-6 fill-muted stroke-muted-foreground" />
          <StarIcon className="w-6 h-6 fill-muted stroke-muted-foreground" />
          <span className="text-sm text-muted-foreground">3.2 out of 5</span>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="feedback">Comentarios adicionales</Label>
          <Textarea id="feedback" rows={3} placeholder="Comparte tus pensamientos..." />
        </div>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="ml-auto">
          Enviar
        </Button>
      </CardFooter>
    </Card>
  )
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
