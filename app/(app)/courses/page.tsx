import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Progress } from '@radix-ui/react-progress'
import { Badge } from '@/components/ui/badge'

export default function Courses() {
  return (
    <div>
      <div className="p-6">
        <h1 className="mb-6 text-2xl font-bold">Courses</h1>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              name: 'Business Intelligence Fundamentals',
              progress: 75,
              worksheets: 12,
              completed: 9,
            },
            { name: 'Data Analysis for Business', progress: 40, worksheets: 10, completed: 4 },
            { name: 'Market Research Methods', progress: 20, worksheets: 8, completed: 2 },
          ].map((course, i) => (
            <Card key={i} className="cursor-pointer transition-shadow hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{course.name}</CardTitle>
                  <Badge className="bg-brand-3 border-brand-5 text-brand-a9 border">Active</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>

                <div className="flex justify-between text-sm">
                  <div>
                    <span className="text-gray-500">Worksheets:</span>
                    <span className="ml-1 font-medium">{course.worksheets}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Completed:</span>
                    <span className="ml-1 font-medium">{course.completed}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-brand-9 hover:bg-brand-10 w-full">View Course</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <h2 className="mb-4 text-lg font-medium">Available Courses</h2>
        <div className="space-y-4">
          {[
            'Advanced Data Visualization',
            'Business Strategy & Planning',
            'Financial Analysis for Business Analysts',
            'Customer Analytics & Insights',
          ].map((course, i) => (
            <Card key={i} className="cursor-pointer transition-shadow hover:shadow-md">
              <div className="flex items-center p-4">
                <div className="flex-1">
                  <h3 className="font-medium">{course}</h3>
                  <p className="text-muted-foreground text-sm">8 worksheets • 4 week course</p>
                </div>
                <Button variant="outline" className="mr-2">
                  Learn More
                </Button>
                <Button className="bg-primary hover:bg-primary-hover">Enroll</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
