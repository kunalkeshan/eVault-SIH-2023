import Layout from '@/components/layouts/Layout';
import React from 'react';

function index() {
	return (
		<Layout>
			<div className='w-screen h-auto md:h-screen py-4 flex flex-col justify-around align-center'>
				<h1 className='font-extrabold text-xl md:text-3xl text-center my-12 md:my-0'>
					Welcome to Document Library !
				</h1>
				<div className='w-[95%] md:w-[75%] mx-auto border-black border-[1px] h-auto md:h-[60%] md:overflow-y-auto shadow-2xl'>
					<div className='md:sticky top-0 bg-white border-black border-x-[1px] p-4 border-[1px] flex w-full justify-around items-center font-bold'>
						<div>Header 1</div>
						<div>Header 2</div>
						<div>Header 3</div>
					</div>
					<div className='p-4 border-[1px] flex w-full justify-around items-center'>
						<div>Field 1</div>
						<div>Field 2</div>
						<div className='py-1 px-3 bg-[#2d61e5] text-white rounded-lg'>
							Field 3
						</div>
					</div>
					<div className='p-4 border-[1px] flex w-full justify-around items-center'>
						<div>Field 1</div>
						<div>Field 2</div>
						<div className='py-1 px-3 bg-[#2d61e5] text-white rounded-lg'>
							Field 3
						</div>
					</div>
					<div className='p-4 border-[1px] flex w-full justify-around items-center'>
						<div>Field 1</div>
						<div>Field 2</div>
						<div className='py-1 px-3 bg-[#2d61e5] text-white rounded-lg'>
							Field 3
						</div>
					</div>
					<div className='p-4 border-[1px] flex w-full justify-around items-center'>
						<div>Field 1</div>
						<div>Field 2</div>
						<div className='py-1 px-3 bg-[#2d61e5] text-white rounded-lg'>
							Field 3
						</div>
					</div>
					<div className='p-4 border-[1px] flex w-full justify-around items-center'>
						<div>Field 1</div>
						<div>Field 2</div>
						<div className='py-1 px-3 bg-[#2d61e5] text-white rounded-lg'>
							Field 3
						</div>
					</div>
					<div className='p-4 border-[1px] flex w-full justify-around items-center'>
						<div>Field 1</div>
						<div>Field 2</div>
						<div className='py-1 px-3 bg-[#2d61e5] text-white rounded-lg'>
							Field 3
						</div>
					</div>
					<div className='p-4 border-[1px] flex w-full justify-around items-center'>
						<div>Field 1</div>
						<div>Field 2</div>
						<div className='py-1 px-3 bg-[#2d61e5] text-white rounded-lg'>
							Field 3
						</div>
					</div>
					<div className='p-4 border-[1px] flex w-full justify-around items-center'>
						<div>Field 1</div>
						<div>Field 2</div>
						<div className='py-1 px-3 bg-[#2d61e5] text-white rounded-lg'>
							Field 3
						</div>
					</div>
					<div className='p-4 border-[1px] flex w-full justify-around items-center'>
						<div>Field 1</div>
						<div>Field 2</div>
						<div className='py-1 px-3 bg-[#2d61e5] text-white rounded-lg'>
							Field 3
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default index;
