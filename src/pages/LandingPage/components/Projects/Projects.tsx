import Card from '../../../../components/Card/Card'
import mandelbrot from './mandelbrot.png'
import colorize from './colorize.png'
import report from './Employee-Report.png'

const Projects = () => {
  return (
    <div className="pt-7 flex flex-col items-center justify-center">
      <div className="text-2xl mb-4">My projects</div>
      <hr className="border-t border-t-1 border-t-slate-200 w-7/12 mb-8" />
      <div className="flex flex-col items-center justify-center gap-y-8">
        <Card
          image={mandelbrot}
          heading="Juliagen"
          content="Fast & Minimal mandelbrot & julia set generator"
          tags={['C', 'Mathematical Visualization']}
        />
        <Card
          image={colorize}
          heading="Colorize"
          content="A web application that generates color palettes from images for UI Design"
          tags={['React', 'REST', 'Image Manipulation']}
        />
        <Card
          image={report}
          heading="Weekly Report Generator"
          content="A GUI-Based Weekly Employee Report Generator that generates a quick PDF Report"
          tags={['Python', 'ReportLab', 'PDF']}
        />
      </div>
    </div>
  )
}

export default Projects
