// import UsernameForm from '@/components/UsernameForm'
import CustomizationForm from '@/components/CustomizationForm'
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
    </div>
  )
}

export default DashboardPage