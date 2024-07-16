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
          Book Appointment
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 max-w-[276px]">
        <Calendar/>
      </PopoverContent>
    </Popover>
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="mt-2">
          Leave a Review
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
          Injection Ratings
        </Link>
        <div className="flex items-center gap-4">
          <div className="relative w-full max-w-md">
            <Input type="search" placeholder="Search providers..." className="pr-10"/>
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
                  Home
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  href="#reviews"
                  className="group inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Reviews
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  href="#"
                  className="group inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  About
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
              Find the Best Injection Services
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
            <h2 id="reviews" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Your Past
              Reviews</h2>
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
                  <p>Great service, friendly staff, and quick injection process.</p>
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
                  <p>Efficient and professional service, but a bit pricey.</p>
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
                  <p>Good service, but the wait time was a bit long.</p>
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
                  <p>Average service, but the staff was friendly.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-8 px-4 md:px-6">
            <h2 id="chat" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Chat with an AI to Find the Best Services
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
                      <p className="text-sm font-medium leading-none">Injection Advisor</p>
                      <p className="text-sm text-muted-foreground">ai@injectionratings.com</p>
                    </div>
                  </div>
                  <Button size="icon" variant="outline" className="ml-auto rounded-full">
                    <PlusIcon className="w-4 h-4"/>
                    <span className="sr-only">New message</span>
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div
                      className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-primary text-primary-foreground">
                      Hi there! How can I assist you in finding the best injection services?
                    </div>
                    <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
                      I'm looking for a clinic that offers quick and reliable injections. Can you recommend any good
                      options in my area?
                    </div>
                    <div
                      className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-primary text-primary-foreground">
                      Absolutely! Based on your location and the reviews from other users, I would recommend checking
                      out ABC Medical Clinic and XYZ Wellness Clinic. They both have high ratings and are known for
                      their efficient and friendly service.
                    </div>
                    <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
                      That's great, thank you! I'll take a look at those options. Is there anything else I should
                      consider when choosing an injection provider?
                    </div>
                    <div
                      className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-primary text-primary-foreground">
                      Some other important factors to consider are the clinic's cleanliness, the experience and
                      qualifications of the staff, and the overall convenience of the location and appointment
                      availability. I'd also recommend reading through any past reviews to get a sense of the patient
                      experience.
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <form className="flex items-center w-full space-x-2">
                    <Input id="message" placeholder="Type your message..." className="flex-1" autoComplete="off"/>
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
        <p className="text-sm">&copy; 2024 Injection Ratings</p>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Privacy
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Terms
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
