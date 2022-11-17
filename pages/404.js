import Container from '@/components/Container'

export default function FourOFourPage() {
    return (
        <div className="pt-48">
            <Container>
                <div className="flex justify-center items-center space-x-4">
                    <div>404</div>
                    <div className="font-medium">Page not found</div>
                </div>
                <p className="text-gray-600 text-center pt-12">Sorry about that, the requested page doesn&apos;t seem to exist.</p>
            </Container>
        </div>

)
}