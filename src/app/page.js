
import {Container,Flex,Heading} from '@radix-ui/themes';
import DashBoardTable from '@/common/DashBoardTable';


export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Container size={1}>
        <DashBoardTable />
      </Container>
    </main>
  )
}
