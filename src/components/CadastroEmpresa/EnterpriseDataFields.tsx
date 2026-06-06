import { InputField } from '@/components/InputField';
import { BriefcaseBusiness, Building2, Phone, Link as LinkIcon } from 'lucide-react';

interface EnterpriseDataFieldsProps {
  documentVal: string;
  handleCnpjChange: (val: string) => void;
  enterpriseName: string;
  setEnterpriseName: (val: string) => void;
  phoneVal: string;
  handlePhoneChange: (val: string) => void;
  contactLink: string;
  setContactLink: (val: string) => void;
  isPending: boolean;
  errors: {
    document?: string;
    enterpriseName?: string;
    phoneNumber?: string;
    contactLink?: string;
  };
  clearFieldError: (field: any) => void;
}

export default function EnterpriseDataFields({
  documentVal,
  handleCnpjChange,
  enterpriseName,
  setEnterpriseName,
  phoneVal,
  handlePhoneChange,
  contactLink,
  setContactLink,
  isPending,
  errors,
  clearFieldError,
}: EnterpriseDataFieldsProps) {
  return (
    <>
      <InputField
        id="enterprise-cnpj"
        label="CNPJ"
        value={documentVal}
        onChange={handleCnpjChange}
        placeholder="00.000.000/0000-00"
        icon={BriefcaseBusiness}
        disabled={isPending}
        error={errors.document}
        autoComplete="off"
      />

      <InputField
        id="enterprise-name"
        label="Nome da Empresa"
        value={enterpriseName}
        onChange={(val) => {
          setEnterpriseName(val);
          clearFieldError('enterpriseName');
        }}
        placeholder="Razão Social ou Nome Fantasia"
        icon={Building2}
        disabled={isPending}
        error={errors.enterpriseName}
        autoComplete="organization"
      />

      <InputField
        id="enterprise-phone"
        label="Telefone / WhatsApp Comercial"
        value={phoneVal}
        onChange={handlePhoneChange}
        placeholder="(11) 99999-9999"
        icon={Phone}
        disabled={isPending}
        error={errors.phoneNumber}
        autoComplete="tel"
        type="tel"
      />

      <InputField
        id="enterprise-link"
        label="Link de Contato (Opcional)"
        value={contactLink}
        onChange={(val) => {
          setContactLink(val);
          clearFieldError('contactLink');
        }}
        placeholder="https://wa.me/seu-numero"
        icon={LinkIcon}
        disabled={isPending}
        error={errors.contactLink}
        autoComplete="url"
        type="url"
      />
    </>
  );
}
