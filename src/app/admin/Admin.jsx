'use client'
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/eVDFcfCfSrj
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { CartesianGrid, XAxis, Area, AreaChart, Bar, BarChart, Line, LineChart } from "recharts"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"

export default function Admin() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/40">
      <header className="flex h-16 items-center justify-between border-b bg-background px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <DatabaseIcon className="h-6 w-6" />
            <span className="font-bold">Admin</span>
          </Link>
          <nav className="hidden gap-4 text-sm font-medium sm:flex">
            <Link href="#dashboard" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Dashboard
            </Link>
            <Link href="#reservations" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Citas
            </Link>
            <Link href="#predictive" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Análisis Predictivos
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Configuración
            </Link>
            <Link href="/" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Aplicación
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Input
            type="search"
            placeholder="Buscar..."
            className="max-w-[200px] rounded-md bg-background px-3 py-2 text-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <img src="/avatar.png" width={32} height={32} className="rounded-full" alt="Avatar" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Perfil</DropdownMenuItem>
              <DropdownMenuItem>Preferencias</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Salir</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 p-4 sm:p-6">
        <div className="grid gap-6">
          <section>
            <div className="flex items-center justify-between">
              <h2 id="dashboard" className="text-2xl font-bold">Dashboard</h2>
              <Button variant="outline" size="sm">
                Reportes
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardTitle>Total de Citas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">1,234</div>
                  <div className="text-sm text-muted-foreground">+15% último mes</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Próximas citas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">789</div>
                  <div className="text-sm text-muted-foreground">+10% último mes</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Citas Canceladas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">123</div>
                  <div className="text-sm text-muted-foreground">-5% último mes</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Demanda por temporada</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">85%</div>
                  <div className="text-sm text-muted-foreground">+20% último año</div>
                </CardContent>
              </Card>
            </div>
          </section>
          <section>
            <div className="flex items-center justify-between">
              <h2 id="reservations" className="text-2xl font-bold">Citas</h2>
              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-1">
                      <FilterIcon className="h-4 w-4" />
                      <span>Filtro</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>Próximas</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Canceladas</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Pasadas</DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="outline" size="sm">
                  <PlusIcon className="h-4 w-4" />
                  <span>Nuevas Citas</span>
                </Button>
              </div>
            </div>
            <Card>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Cita ID</TableHead>
                      <TableHead>Cliente</TableHead>
                      <TableHead>Fecha</TableHead>
                      <TableHead>Estado</TableHead>
                      <TableHead>Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Link href="#" className="font-medium" prefetch={false}>
                          #12345
                        </Link>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">John Doe</div>
                        <div className="text-sm text-muted-foreground">john@example.com</div>
                      </TableCell>
                      <TableCell>2023-05-15</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Próxima</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon">
                            <FilePenIcon className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <TrashIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Link href="#" className="font-medium" prefetch={false}>
                          #12346
                        </Link>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">Jane Smith</div>
                        <div className="text-sm text-muted-foreground">jane@example.com</div>
                      </TableCell>
                      <TableCell>2023-05-20</TableCell>
                      <TableCell>
                        <Badge variant="outline">Cancelada</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon">
                            <FilePenIcon className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <TrashIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Link href="#" className="font-medium" prefetch={false}>
                          #12347
                        </Link>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">Bob Johnson</div>
                        <div className="text-sm text-muted-foreground">bob@example.com</div>
                      </TableCell>
                      <TableCell>2023-05-25</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Próxima</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon">
                            <FilePenIcon className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <TrashIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </section>
          <section>
            <div className="flex items-center justify-between">
              <h2 id="predictive" className="text-2xl font-bold">Análisis Predictivo</h2>
              <Button variant="outline" size="sm">
                Ver predicciones
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Demanda por Temporada</CardTitle>
                </CardHeader>
                <CardContent>
                  <AreachartChart className="aspect-[4/3]" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Tendencias de Citas</CardTitle>
                </CardHeader>
                <CardContent>
                  <BarchartChart className="aspect-[4/3]" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enfermedades de Temporada</CardTitle>
                </CardHeader>
                <CardContent>
                  <AreachartChart className="aspect-[4/3]" />
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

function AreachartChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="min-h-[300px]"
      >
        <AreaChart
          accessibilityLayer
          data={[
            { month: "Enero", desktop: 186 },
            { month: "Febrery", desktop: 305 },
            { month: "Marzo", desktop: 237 },
            { month: "Abril", desktop: 73 },
            { month: "Mayo", desktop: 209 },
            { month: "Junio", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
          <Area
            dataKey="desktop"
            type="natural"
            fill="var(--color-desktop)"
            fillOpacity={0.4}
            stroke="var(--color-desktop)"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  )
}


function BarchartChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="min-h-[300px]"
      >
        <BarChart
          accessibilityLayer
          data={[
            { month: "Enero", desktop: 186 },
            { month: "Febrero", desktop: 305 },
            { month: "Marzo", desktop: 237 },
            { month: "Abril", desktop: 73 },
            { month: "Mayo", desktop: 209 },
            { month: "Junio", desktop: 214 },
          ]}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}


function DatabaseIcon(props) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function FilePenIcon(props) {
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
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  )
}


function FilterIcon(props) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


function LinechartChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={[
            { month: "Enero", desktop: 186 },
            { month: "Febrero", desktop: 305 },
            { month: "Marzo", desktop: 237 },
            { month: "Abril", desktop: 73 },
            { month: "Mayo", desktop: 209 },
            { month: "Junio", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
        </LineChart>
      </ChartContainer>
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


function TrashIcon(props) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
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
