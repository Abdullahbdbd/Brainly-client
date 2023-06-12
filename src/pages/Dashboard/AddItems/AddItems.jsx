import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const AddItems = () => {
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.img[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, category, teacher, email, seat } = data;
                    const newItem = { name, price: parseFloat(price), category, teacher, email, seat, img: imgURL }
                    console.log(newItem)
                    axiosSecure.post('/school', newItem)
                        .then(data => {
                            console.log('after posting new class', data.data)
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })

                            }
                        })
                }
            })
    };

    return (
        <>
        <Helmet>
            <title>Dashboard | Add Item</title>
        </Helmet>
        <div className='w-full px-36'>

            <h1 className='text-center text-4xl font-semibold'>ADD AN ITEM</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex space-x-5'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Class Name*</span>
                        </label>
                        <input type="name" placeholder="Class Name"
                            {...register("name", { required: true, maxLength: 80 })} className="input input-bordered w-full " required />
                    </div>


                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select defaultValue="Class" {...register("category", { required: true })} className="select select-bordered">
                            <option>Class</option>
                        </select>
                    </div>
                </div>


                <div className='flex my-3 space-x-5'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Teacher Name*</span>
                        </label>
                        <input type="teacher" placeholder="Teacher Name" defaultValue={user.displayName}
                            {...register("teacher", { required: true, maxLength: 80 })} className="input input-bordered w-full " required />
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Teacher Email*</span>
                        </label>
                        <input type="email" placeholder="Teacher Email" defaultValue={user.email}
                            {...register("email", { required: true, })} className="input input-bordered w-full " required />
                    </div>
                </div>


                <div className='flex space-x-5'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Available seats*</span>
                        </label>
                        <input type="seat" placeholder="Available seats"
                            {...register("seat", { required: true })} className="input input-bordered w-full " required />
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="price" placeholder="Price"
                            {...register("price", { required: true })} className="input input-bordered w-full " required />
                    </div>
                </div>


                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Class Image*</span>
                    </label>
                    <input type="file" {...register("img", { required: true })} className="file-input file-input-bordered w-full max-w-xs" required />
                </div>


                <div className='text-center mt-10'>
                    <input className="btn btn-sm btn-active btn-neutral" type="submit" value="Add Item" />
                </div>


            </form>
        </div>
        </>
    );
};

export default AddItems;