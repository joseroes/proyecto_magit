/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JLPAOk5CPaj
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import RateInjectionExperience from "@/components/RateInjectionExperience";

function ServiceCardContent() {
  return <>
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="mt-2">
					Reserva una cita
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 max-w-[276px]">
        <Calendar/>
      </PopoverContent>
    </Popover>
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="mt-2">
					Deja un comentario
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 max-w-[276px]">
        <RateInjectionExperience/>
      </PopoverContent>
    </Popover>
  </>;
}

export default function Client() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-primary px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link href="#" className="text-primary-foreground font-bold text-lg" prefetch={false}>
          Calificaciones de Servicios de Salud
        </Link>
        <div className="flex items-center gap-4">
          <div className="relative w-full max-w-md">
            <Input type="search" placeholder="Buscar proveedores..." className="pr-10"/>
            <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"/>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuLink asChild>
                <Link
                  href="/"
                  className="group inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Inicio
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  href="#reviews"
                  className="group inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
									Reseñas
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  href="#"
                  className="group inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Acerca
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  href="/admin"
                  className="group inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Admin
                </Link>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-8 px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Encuentra los mejores servicios de salud
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Card className="w-full">
                <CardHeader className="flex items-center justify-between">
                  <div>
                    <CardTitle>ABC Medical Clinic</CardTitle>
                    <CardDescription>123 Main St, Anytown USA</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <StarIcon className="w-5 h-5 fill-primary"/>
                    <span className="text-lg font-medium">4.8</span>
                  </div>
                </CardHeader>
                <CardContent className="mt-4">
                  <ServiceCardContent/>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader className="flex items-center justify-between">
                  <div>
                    <CardTitle>XYZ Wellness Clinic</CardTitle>
                    <CardDescription>456 Oak Rd, Somewhere City</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <StarIcon className="w-5 h-5 fill-primary"/>
                    <span className="text-lg font-medium">4.5</span>
                  </div>
                </CardHeader>
                <CardContent className="mt-4">
                  <ServiceCardContent/>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader className="flex items-center justify-between">
                  <div>
                    <CardTitle>Acme Injection Services</CardTitle>
                    <CardDescription>789 Elm St, Othertown</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <StarIcon className="w-5 h-5 fill-primary"/>
                    <span className="text-lg font-medium">4.2</span>
                  </div>
                </CardHeader>
                <CardContent className="mt-4">
                  <ServiceCardContent/>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader className="flex items-center justify-between">
                  <div>
                    <CardTitle>Healthwise Injections</CardTitle>
                    <CardDescription>321 Maple Ln, Somewhere Else</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <StarIcon className="w-5 h-5 fill-primary"/>
                    <span className="text-lg font-medium">4.0</span>
                  </div>
                </CardHeader>
                <CardContent className="mt-4">
                  <ServiceCardContent/>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container space-y-8 px-4 md:px-6">
            <h2 id="reviews" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Tus reseñas pasadas</h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Card className="w-full">
                <CardHeader className="flex items-center justify-between">
                  <div>
                    <CardTitle>ABC Medical Clinic</CardTitle>
                    <CardDescription>123 Main St, Anytown USA</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <StarIcon className="w-5 h-5 fill-primary"/>
                    <span className="text-lg font-medium">4.8</span>
                  </div>
                </CardHeader>
                <CardContent className="mt-4">
                  <p>Excelente servicio, personal amable y proceso de inyección rápido.</p>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader className="flex items-center justify-between">
                  <div>
                    <CardTitle>XYZ Wellness Clinic</CardTitle>
                    <CardDescription>456 Oak Rd, Somewhere City</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <StarIcon className="w-5 h-5 fill-primary"/>
                    <span className="text-lg font-medium">4.5</span>
                  </div>
                </CardHeader>
                <CardContent className="mt-4">
                  <p>Servicio eficiente y profesional, aunque un poco caro.</p>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader className="flex items-center justify-between">
                  <div>
                    <CardTitle>Acme Injection Services</CardTitle>
                    <CardDescription>789 Elm St, Othertown</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <StarIcon className="w-5 h-5 fill-primary"/>
                    <span className="text-lg font-medium">4.2</span>
                  </div>
                </CardHeader>
                <CardContent className="mt-4">
                  <p>Buen servicio, pero el tiempo de espera fue un poco largo.</p>
                </CardContent>
              </Card>
              <Card className="w-full">
                <CardHeader className="flex items-center justify-between">
                  <div>
                    <CardTitle>Healthwise Injections</CardTitle>
                    <CardDescription>321 Maple Ln, Somewhere Else</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <StarIcon className="w-5 h-5 fill-primary"/>
                    <span className="text-lg font-medium">4.0</span>
                  </div>
                </CardHeader>
                <CardContent className="mt-4">
                  <p>Servicio mediocre, pero el personal era amable.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-8 px-4 md:px-6">
            <h2 id="chat" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Chatea con la IA y encuentra los mejores servicios
            </h2>
            <div className="flex flex-col items-center justify-center">
              <Card className="w-full max-w-md">
                <CardHeader className="flex flex-row items-center">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg"/>
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">Asesor virtual</p>
                      <p className="text-sm text-muted-foreground">ai@injectionratings.com</p>
                    </div>
                  </div>
                  <Button size="icon" variant="outline" className="ml-auto rounded-full">
                    <PlusIcon className="w-4 h-4"/>
                    <span className="sr-only">Nuevo Mensaje</span>
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div
                      className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-primary text-primary-foreground">
											¡Hola! ¿Cómo puedo ayudarle a encontrar los mejores servicios de inyección?
                    </div>
                    <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
											Estoy buscando una clínica que ofrezca inyecciones rápidas y confiables. ¿Puedes recomendarme alguna buena opción en mi zona?
                    </div>
                    <div
                      className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-primary text-primary-foreground">
											¡Absolutamente! Según su ubicación y las opiniones de otros usuarios, recomendaría visitar ABC Medical Clinic y XYZ Wellness Clinic. Ambos tienen altas calificaciones y son conocidos por su servicio eficiente y amigable.
                    </div>
                    <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
											¡Eso es genial, Gracias! Echaré un vistazo a esas opciones. ¿Hay algo más que deba considerar al elegir un proveedor de inyecciones?
                    </div>
                    <div
                      className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-primary text-primary-foreground">
											Algunos otros factores importantes a considerar son la limpieza de la clínica, la experiencia y las calificaciones del personal, y la conveniencia general de la ubicación y la disponibilidad de citas. También recomendaría leer reseñas anteriores para tener una idea de la experiencia del paciente.
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <form className="flex items-center w-full space-x-2">
                    <Input id="message" placeholder="Escriba su mensaje..." className="flex-1" autoComplete="off"/>
                    <Button type="submit" size="icon">
                      <SendIcon className="w-4 h-4"/>
                      <span className="sr-only">Send</span>
                    </Button>
                  </form>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground px-4 lg:px-6 py-4 flex items-center justify-between">
        <p className="text-sm">&copy; 2024 Calificaciones de Servicios de Salud</p>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Reglamento de privacidad
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Términos y Condiciones
          </Link>
          <Link href="#" className="text-sm" prefetch={false}/>
        </div>
      </footer>
    </div>
  )
}

function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SendIcon(props) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
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
