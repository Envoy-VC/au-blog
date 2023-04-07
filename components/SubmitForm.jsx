import React, { useState } from 'react';

import { GraphQLClient } from 'graphql-request';
import { gql } from 'graphql-request';

import { ToastContainer, toast } from 'react-toastify';

import { SUBMIT_ARTICLE, PUBLISH_ARTICLE } from '@/utils/query';

import 'react-toastify/dist/ReactToastify.css';

const SubmitForm = ({ id }) => {
	const [form, setForm] = useState({
		name: '',
		discordHandle: '',
		articleLink: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const notiftySuccess = () =>
		toast.success('🦄 Submit Successful', {
			position: 'bottom-left',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});

	const notiftyError = (message) =>
		toast.error(`${message}`, {
			position: 'bottom-left',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});

	const handleFormFieldChange = (fieldName, e) => {
		setForm({ ...form, [fieldName]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setIsSubmitting(true);
			console.log(id);
			const hygraph = new GraphQLClient(
				'https://api-ap-south-1.hygraph.com/v2/clg14kh35843801un41i6e6tb/master'
			);
			const submitArticle = async () => {
				const query = SUBMIT_ARTICLE(
					form.name,
					form.articleLink,
					form.discordHandle,
					id
				);
				const gqlQuery = gql`
					${query}
				`;
				const res = await hygraph.request(gqlQuery);
				const submitId = res.createSubmit.id;
				return submitId;
			};
			const submitId = await submitArticle();
			const publishArticle = async (submitId) => {
				const query = PUBLISH_ARTICLE(submitId);
				const gqlQuery = gql`
					${query}
				`;
				const res = await hygraph.request(gqlQuery);
				const publishedId = res.publishSubmit.id;
				return publishedId;
			};
			const publishedId = await publishArticle(submitId);
			notiftySuccess();
		} catch (error) {
			const message = error.message.substring(0, error.message.indexOf('.'));
			notiftyError(message);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className='px-4 py-16 sm:px-6 lg:px-8 bg-gray-200 rounded-lg shadow-lg lg:mx-8 mx-0'>
			<div className='mx-auto'>
				<h1 className='text-[#020202] text-3xl sm:text-[36px] font-neueMontreal font-extrabold leading-[54px]'>
					Submit Article
				</h1>

				<p className='mx-auto mt-4 max-w-md text-center text-gray-500'>
					Enter your submission for the contest. Please be sure to follow the
					submission guidelines carefully to ensure your entry is eligible for
					consideration. Good luck!
				</p>

				<form
					className='mt-6 mb-0 space-y-4 rounded-lg p-4 sm:p-6 lg:p-8'
					onSubmit={handleSubmit}
				>
					<div>
						<label for='name' className='sr-only'>
							Name
						</label>

						<div className='relative'>
							<input
								type='text'
								className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
								placeholder='Name'
								onChange={(e) => handleFormFieldChange('name', e)}
							/>
						</div>
					</div>

					<div>
						<label for='discord handle' className='sr-only'>
							Discord Handle
						</label>

						<div className='relative'>
							<input
								type='text'
								className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
								placeholder='Discord Handle'
								onChange={(e) => handleFormFieldChange('discordHandle', e)}
							/>
						</div>
					</div>

					<div>
						<label for='article' className='sr-only'>
							Article Link
						</label>

						<div className='relative'>
							<input
								type='link'
								className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
								placeholder='Link for the Article'
								onChange={(e) => handleFormFieldChange('articleLink', e)}
							/>
						</div>
					</div>

					<button
						type='submit'
						className='max-w-xs bg-black px-12 py-3 text-xl font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto rounded-2xl transition-all delay-100'
					>
						{isSubmitting ? 'Submitting...' : 'Submit'}
					</button>
				</form>
			</div>
			<ToastContainer />
		</div>
	);
};

export default SubmitForm;
