// import UsernameForm from '@/components/UsernameForm'
import CustomizationForm from '@/components/CustomizationForm'
import ManageLinks from '@/components/ManageLinks'
import UsernameForm from '@/components/UsernameForm'
import React from 'react'

const DashboardPage = () => {
  return (
    <div>
        {/* Analytics Metrics */}

        {/* Customize linktree link url */}
        <div className='bg-gradient-to-br from-gray-50 to-gray-100 p-4 lg:p-8 mb-8'>
            <div className='max-w-7xl'>
                <div className='bg-white/50 backdrop-blur-sm border border-white/2
                0 rounded-2xl p-8 shadow-xl shadow-gray-200/50'>
                   <UsernameForm />
                </div>
            </div>
        </div>

        {/* Page Customization Section */}
        <div className='bg-gradient-to-br  from-gray-50 to-gray-100 p-4 lg:p-8 mb-8'>
          <div className='max-w-7xl mx-auto'>
            <CustomizationForm />
          </div>
        </div>

        {/* Manage Links Section */}
        <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100
        p-4 lg:p-8'>
            <div className='max-w-7xl mx-auto'>
              <div className='flex flex-col lg:flex-row lg:items-center gap-8
              lg:gap-16'>
                {/* Left hand side */}
                <div className='lg:w-2/5 lg:sticky lg:top-8'>
                  <div className='space-y-6'>
                    <div> 
                      <h1 className='text-4xl lg:text-5xl font-bold text-gray-900 leading-tight'>
                        Manage Your Links
                      </h1>
                      <div className='w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-4'> </div>

                    </div>
                    <p className='text-lg text-gray-600 leading-relaxed'>
                      Organize and Customize your link-in-bio page. Drag and drop
                      to reorder , edit details, or remove links that are no longer
                      needed
                    </p>
                    <div className='space-y-4 pt-5'>
                      <div className='flex items-center gap-3'>
                          <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                          <span className='text-gray-600'>
                            Drag & Drop to reorder
                          </span>
                      </div>
                      <div className='flex items-center gap-3'>
                        <div className='w-2 h-2 bg-purple-500 rounded-full'></div>
                        <span className='text-gray-600'> Real-time updates</span>
                      </div>
                      <div className='flex items-center gap-3'>
                        <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                        <span className='text-gray-600'>
                          Click tracking Analytics
                        </span> 
                      </div>
                      </div>
                    </div>
                </div>

                {/* Right side - Link Management */}
                <div className='lg:w-3/5'>
                  <div className='bg-white/80 backdrop-blur-sm border border-white/20
                   rounded-2xl p-8 shadow-xl shadow-gray-200/50'>
                    <div className='mb-6'>
                      <h2 className='text-xl font-semibold text-gray-900 mb-2'>
                        Your Links
                      </h2>
                      <p className='text-gray-500'>
                        Drag to reorder, click to edit , or delete unwanted links
                      </p>
                    </div>
                    <ManageLinks preloadedLinks = {preloadedLinks} />


                  </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
    
  )
}

export default DashboardPage