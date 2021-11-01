import React from 'react';
import { useForm } from 'react-hook-form';

const AddTravel = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const onSubmit = (data) => {
		fetch('http://localhost:3000/home', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(data)
		})
			.then((res) => res.json())
			.then((result) => console.log(result));

		console.log(data);
	};

	console.log(watch('example'));

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* register your input into the hook by invoking the "register" function */}
				<input defaultValue="test" {...register('example')} />

				{/* include validation with required or other standard HTML validation rules */}
				<input {...register('exampleRequired', { required: true })} />
				{/* errors will return when field validation fails  */}
				{errors.exampleRequired && <span>This field is required</span>}
				<select {...register('gender')}>
					<option value="female">female</option>
					<option value="male">male</option>
					<option value="other">other</option>
				</select>
				<input type="submit" />
			</form>
		</div>
	);
};

export default AddTravel;
