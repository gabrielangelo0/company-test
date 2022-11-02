import { RegularText, TitleText } from "../Typograph";
import { Button, ButtonContainer, CardContainer, CardInput, ContentForm, FormCardContainer, FullInput, HalfInput } from "./styles";
import { UserSquare, Buildings, Phone, Envelope } from 'phosphor-react';
import { FormEvent, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import api from "../../services/axios";
import normalizeCNPJNumber, { normalizePhoneNumber } from "../../utils/masks";

export default function FormCardCompany () {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors }, reset, watch, setValue } = useForm();

    function onSubmitForm (event: FormEvent | any) {

        api.post('register-company', event)
        .then(({ data }) => {

        router.push(`/newemployee/${data.companyId}`)
        })
        toast.success('Company created successfully');

        reset();
    }

    function handleReset () {
        reset();
    }

    const cnpjValue = watch('cnpj');
    const phoneValue = watch('phone');
    useEffect(() => {
        setValue('cnpj', normalizeCNPJNumber(cnpjValue)),
        setValue('phone', normalizePhoneNumber(phoneValue))
    }, [cnpjValue, phoneValue]);

    return (
        <FormCardContainer>
            <TitleText>Create new company<span>.</span></TitleText>
            <ContentForm onSubmit={handleSubmit(onSubmitForm)}>
                <HalfInput>
                    <CardContainer>
                        <CardInput>
                            <div>
                                <RegularText>Company Name</RegularText>
                                <input type="text" {...register('name', { required: true })} />
                            </div>
                                <UserSquare size={32} color='#ADB2B8' weight="fill" />
                        </CardInput>
                            {errors.name && <span>This field is required</span>}
                    </CardContainer>
                    <CardContainer>
                        <CardInput>
                            <div>
                                <RegularText>CNPJ</RegularText>
                                <input type="text" maxLength={14} {...register('cnpj', { required: true })} />
                            </div>
                                <UserSquare size={32} color='#ADB2B8' weight="fill" />
                        </CardInput>
                                {errors.cnpj && <span>This field is required</span>}
                    </CardContainer>
                    <CardContainer>
                        <CardInput>
                            <div>
                                <RegularText>Social Reason</RegularText>
                                <input type="text" {...register('razaoSocial', { required: true })} />
                            </div>
                                <Buildings size={32} color='#ADB2B8' weight="fill" />
                        </CardInput>
                        {errors.razaoSocial && <span>This field is required</span>}
                    </CardContainer>
                    <CardContainer>
                        <CardInput>
                            <div>
                                <RegularText>Phone</RegularText>
                                <input type="tel" maxLength={11} {...register('phone', { required: true })} />
                            </div>
                                <Phone size={32} color='#ADB2B8' weight="fill" />
                        </CardInput>
                        {errors.phone && <span>This field is required</span>}
                    </CardContainer>
                </HalfInput>
                <FullInput>
                    <CardContainer>
                        <CardInput>
                            <div>
                                <RegularText>Email</RegularText>
                                <input type="email" {...register('email', { required: true })} />
                            </div>
                                <Envelope size={32} color='#ADB2B8' weight="fill" />
                    </CardInput>
                                {errors.email && <span>This field is required</span>}
                    </CardContainer>
                </FullInput>
            <ButtonContainer>
                <Button variant="gray" type="button" onClick={ handleReset }>Reset</Button>
                <Button variant="blue" type="submit">Create account</Button>
            </ButtonContainer>
            </ContentForm>
        </FormCardContainer>
    )
}