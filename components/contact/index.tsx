import {Link, SvgIcon} from '@material-ui/core';
import React from 'react';
import classes from "./Contact.module.scss";
import {
    PersonOutlineOutlined as PersonOutlineOutlinedIcon,
    AlternateEmailOutlined as AlternateEmailOutlinedIcon,
    EmailOutlined as EmailOutlinedIcon
} from '@material-ui/icons';
import { useForm , FormProvider} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

type propsType ={}

interface IFormInputs {
    name: string
    email: string
    message: string
}
const schema = yup.object({
    name: yup.string().required('*has bee').matches(/^[aA-zZ\s]+$/, '*only letters'),
    email: yup.string().email('*invalid mail').required('*Mail is required'),
    message: yup.string().required('*message is a required field')
}).required();

const Contact:React.FC<propsType> = () => {
    let [field, setField] = React.useState<'name'| 'email'| 'message' | null>(null)
    let torchField = (res: 'name'| 'email'| 'message' | null)=>{
        setField(res)
    }
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        mode: 'onChange',
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: IFormInputs) => console.log(data);
    return (
        <div className={classes.contact_wrapper} id={'contact'}>
            <div className={'custom-container'}>
                <div className={classes.body_wrap}>
                    <div className={classes.contact_info}>
                        <div className={classes.table_info}>
                            <div className={classes.item_table}>
                                <p>Country:</p>
                                <h1>Ukraine</h1>
                            </div>
                            <div className={classes.item_table}>
                                <p>City:</p>
                                <h1>Ivano-Frankovsk</h1>
                            </div>
                        </div>
                        <div className={classes.table_info}>
                            <div className={classes.item_table}>
                                <p>Email:</p>
                                <h1>olexandr.kk@gmail.com</h1>
                            </div>
                            <div className={classes.item_table}>
                                <p>Telegram:</p>
                                <h1>@Alex_UneQual</h1>
                            </div>
                        </div>
                        <div className={classes.table_info}>
                            <div className={classes.item_table}>
                                <p>linkedin:</p>
                                <Link className={classes.link_button}  href="https://www.linkedin.com/in/alex-kis/" underline="none">My profile</Link>
                            </div>
                        </div>
                    </div>
                    <div className={classes.form_wrapper}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className={classes.ContactForm}>
                                    <div className={classes.WrapperForInput}>
                                        <label
                                            className={classes.styleForLabelNormal}>
                                            <PersonOutlineOutlinedIcon className={classes.icon_style} style={{color : field === 'name' ? '#09FAD9' : 'white'}}/>
                                        </label>
                                        <input
                                            {...register('name')}
                                            onFocus={()=>{
                                                torchField('name')
                                            }}
                                            onBlur={()=>{
                                                torchField(null)
                                            }}
                                            placeholder={'Name'}
                                        />
                                        <p className={classes.error_message}>{errors.name?.message}</p>
                                    </div>
                                    <div className={classes.WrapperForInput}>
                                        <label
                                            className={classes.styleForLabelNormal}>
                                            <AlternateEmailOutlinedIcon className={classes.icon_style} style={{color : field === 'email' ? '#09FAD9' : 'white'}}/>
                                        </label>
                                        <input
                                            {...register('email')}
                                            placeholder={'Email'}
                                            onFocus={()=>{
                                                torchField('email')
                                            }}
                                            onBlur={()=>{
                                                torchField(null)
                                            }}
                                        />
                                        <p className={classes.error_message}>{errors.email?.message}</p>
                                    </div>
                                    <div className={classes.WrapperForTexArea}>
                                        <div className={classes.backGroundLabelTextArea}>
                                            <label
                                                className={classes.styleForLabelNormal}>
                                                <EmailOutlinedIcon className={classes.icon_style} style={{color : field === 'message' ? '#09FAD9' : 'white'}}/>
                                            </label>
                                        </div>
                                        <textarea
                                            {...register('message')}
                                            name={'message'}
                                            className={classes.ContactFormTextareaNormal}
                                            placeholder={'Message'}
                                            onFocus={()=>{
                                                torchField('message')
                                            }}
                                            onBlur={()=>{
                                                torchField(null)
                                            }}
                                        >
                                    </textarea>
                                    <p className={classes.error_message}>{errors.message?.message}</p>
                                    </div>
                                    <button  type={'submit'} className={classes.ButtonSend}>
                                        {'Send Message'}
                                    </button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;