import Layout from '@/components/layouts/Layout';
import React from 'react';
import Link from 'next/link';

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';

const records = [
	{
		name: 'Buildspace',
		description: 'Entry pass for buildspace s4',
		image: 'ipfs://bafybeifa7o7p6aefqwps7kygg54z7anz7wte5bzvfiqhdjvcmamgpa6lwq/YAgAmLV.png',
	},
	{
		name: 'Buildspace',
		description: 'Entry pass for buildspace s4',
		image: 'ipfs://bafybeifa7o7p6aefqwps7kygg54z7anz7wte5bzvfiqhdjvcmamgpa6lwq/YAgAmLV.png',
	},
	{
		name: 'Buildspace',
		description: 'Entry pass for buildspace s4',
		image: 'ipfs://bafybeifa7o7p6aefqwps7kygg54z7anz7wte5bzvfiqhdjvcmamgpa6lwq/YAgAmLV.png',
	},
	{
		name: 'Buildspace',
		description: 'Entry pass for buildspace s4',
		image: 'ipfs://bafybeifa7o7p6aefqwps7kygg54z7anz7wte5bzvfiqhdjvcmamgpa6lwq/YAgAmLV.png',
	},
	{
		name: 'Buildspace',
		description: 'Entry pass for buildspace s4',
		image: 'ipfs://bafybeifa7o7p6aefqwps7kygg54z7anz7wte5bzvfiqhdjvcmamgpa6lwq/YAgAmLV.png',
	},
	{
		name: 'Buildspace',
		description: 'Entry pass for buildspace s4',
		image: 'ipfs://bafybeifa7o7p6aefqwps7kygg54z7anz7wte5bzvfiqhdjvcmamgpa6lwq/YAgAmLV.png',
	},
];

export default function index() {
	return (
		<div className='max-h-[60vh] overflow-y-auto w-[95vw] md:w-[65vw] border-2 border-neutral-500 mx-auto my-12'>
			<Table>
				<TableCaption></TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className='text-center'>Name</TableHead>
						<TableHead className='text-center'>
							Description
						</TableHead>
						<TableHead className='text-center'>Document</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{records.map((record) => (
						<TableRow key={record.name}>
							<TableCell className='text-center'>
								{record.name}
							</TableCell>
							<TableCell className='text-center'>
								{record.description}
							</TableCell>
							<TableCell className='text-center'>
								<Link
									href={record.image}
									className='px-4 py-2 bg-blue-600 text-white rounded-xl'
								>
									View
								</Link>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
