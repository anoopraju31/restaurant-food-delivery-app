import Image from 'next/image'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookSquare } from 'react-icons/fa'

const LoginPage = () => {
	return (
		<section className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] p-4 flex items-center justify-center'>
			{/* Wrapper */}
			<div className='md:w-full lg:w-[60%] 2xl:w-1/2 h-full md:h-[70%] flex flex-col md:flex-row shadow-xl rounded-2xl'>
				{/* Image Container */}
				<div className='relative h-1/3 w-full md:h-full md:w-1/2'>
					<Image
						src='/login/loginBg.png'
						alt=''
						fill
						className='object-cover rounded-2xl'
					/>
				</div>

				{/* Form Container */}
				<div className='md:w-1/2 p-10 flex flex-col gap-8'>
					<h1 className='font-bold text-xl xl:text-3xl'>Welcome</h1>
					<p>Log into your account or create a new one using social buttons</p>
					<button className='flex gap-4 p-4 ring-1 ring-orange-100 rounded-md justify-center items-center'>
						<FcGoogle size={18} />
						<span>Sign in with Google</span>
					</button>
					<button className='flex gap-4 p-4 ring-1 ring-blue-100 rounded-md justify-center items-center'>
						<FaFacebookSquare size={18} color='#0B84EE' />
						<span>Sign in with Facebook</span>
					</button>
					<p className='text-sm'>
						Have a problem?{' '}
						<Link className='underline' href='/'>
							Contact us
						</Link>
					</p>
				</div>
			</div>
		</section>
	)
}

export default LoginPage
