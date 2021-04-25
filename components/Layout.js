import { Fragment, useEffect, useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import { Disclosure } from '@headlessui/react'
import Head from 'next/head'

const navigation = [
  {
    headerText: 'Items',
    headingText: 'Items',
    link: '/'
  },
  { headerText: 'Categories', headingText: 'Categories', link: '/categories' },
  {
    headerText: 'Locations',
    headingText: 'Locations',
    link: '/locations'
  }
]

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

const Layout = ({
  children,
  title = 'Inventory System',
  description = 'An inventory system built on Next and Django'
}) => {
  const [heading, setHeading] = useState('')
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    const pageHeading =
      navigation.find(item => item.link === window.location.pathname)
        ?.headingText ?? 'Inventory'
    setHeading(pageHeading)
    setActiveLink(window.location.pathname)
  }, [navigation])
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
      </Head>

      <div>
        <Disclosure as='nav' className='bg-indigo-600'>
          {({ open }) => (
            <>
              <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                  <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                      <img
                        className='h-8 w-8'
                        src='https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg'
                        alt='Workflow'
                      />
                    </div>
                    <div className='hidden md:block'>
                      <div className='ml-10 flex items-baseline space-x-4'>
                        {navigation.map(item => (
                          <Fragment key={item.headerText}>
                            <a
                              href={`${item.link}`}
                              className={classNames(
                                activeLink === item.link
                                  ? 'bg-indigo-700 text-white'
                                  : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
                                'px-3 py-2 rounded-md text-sm font-medium'
                              )}
                            >
                              {item.headerText}
                            </a>
                          </Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='-mr-2 flex md:hidden'>
                    {/* Mobile menu button */}
                    <Disclosure.Button className='bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white'>
                      <span className='sr-only'>Open main menu</span>
                      {open ? (
                        <XIcon className='block h-6 w-6' aria-hidden='true' />
                      ) : (
                        <MenuIcon
                          className='block h-6 w-6'
                          aria-hidden='true'
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className='md:hidden'>
                <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                  {navigation.map(item => (
                    <Fragment key={item.headerText}>
                      <a
                        href={`${item.link}`}
                        className={classNames(
                          activeLink === item.link
                            ? 'bg-indigo-700 text-white'
                            : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
                          'px-3 py-2 rounded-md text-base font-medium'
                        )}
                      >
                        {item.headerText}
                      </a>
                    </Fragment>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className='bg-white shadow'>
          <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold leading-tight text-gray-900'>
              {heading}
            </h1>
          </div>
        </header>
        <main>
          <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
            {children}
          </div>
        </main>
      </div>
    </>
  )
}

export default Layout
