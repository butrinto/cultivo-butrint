import { useState } from 'react'
import '../app/responsive.banner.css'
import exportreportrequested from '../public/export-report-requested.png'
import bannericon from '../public/img1.png'
import nextstepexpertreport from '../public/next-step-expert-report.png'
import { ContactFormDialog } from './ContactFormDialog'

export const ResponsiveBanner: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false) // State to track form submission
  const [imageSrc, setImageSrc] = useState<string>(nextstepexpertreport.src) // State to manage image source
  const [buttonText, setButtonText] = useState<string>('Get In Touch') // State to manage button text

  const handleFormSubmit = (message: string) => {
    console.log('Message submitted:', message)
    setIsDialogOpen(false)
    setFormSubmitted(true) // Update state to indicate form submission
    setImageSrc(exportreportrequested.src) // Change the image source after form submission
    setButtonText('Send Another Message') // Change button text after form submission
  }

  return (
    <div className='banner'>
      <div className='left'>
        <div>
          <ContactFormDialog
            open={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            onFormSubmitted={handleFormSubmit}
          />
          <div>
            <img src={bannericon.src} alt='' width={60} height={60} />
          </div>
          <div>
            <img
              src={imageSrc}
              alt=''
              width={formSubmitted ? 230 : 170}
              height={formSubmitted ? 25 : 55}
            />
          </div>
        </div>
      </div>
      <div className='right'>
        <div className='rightText'>
          {/* Conditionally render different content based on form submission */}
          {formSubmitted ? (
            <div className='text-container'>
              <p className='text'>
                We received your message. Please feel free to get in touch again
                if you would like to include any further details or ask any
                other questions. We are eager to assist you.
              </p>
            </div>
          ) : (
            <div className='text-container'>
              <p className='text'>
                Please get in touch if you would like an expert report for this
                site. Benefits include:
              </p>
              <ul className='text2'>
                <li>Key insights from our expert team</li>
                <li>An in-depth analysis of the site</li>
                <li>Recommendations of next steps to take</li>
              </ul>
            </div>
          )}
        </div>
        <div className='button-container'>
          <button className='button' onClick={() => setIsDialogOpen(true)}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}
