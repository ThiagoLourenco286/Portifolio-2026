import type { Metadata } from 'next';
import { Certificados } from "@/components/certificados/certificados";

export const metadata: Metadata = {
    title: 'Certificados'
};

export default function CertificadosPage() {
    return (
        <Certificados />
    )
}
