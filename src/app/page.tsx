import { Separator } from '../components/ui/separator';
import { Button } from '../components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Plus, List, ListX, ListCheck,  SquareCheck, Trash, Sigma} from 'lucide-react';

const Home = () => {
  return (
    < div className='w-full h-screen bg-gray-100 flex items-center justify-center'>
      <Card className='w-lg p-4'>
        <CardHeader className='flex gap-2 '>

          <Button variant={'outline'} className='cursor-pointer'><Plus /> Adicionar</Button>
          <Input placeholder="Digite algo..." ></Input>

        </CardHeader>


              
        <CardContent className='flex  flex-col gap-4'>
          
        <Separator/>

          <div className='flex gap-2'>
            <Badge className='cursor-pointer rounded-sm' variant='default'><List/>Todas</Badge>
            <Badge className='cursor-pointer rounded-sm' variant='outline'><ListX/> Não finalizadas</Badge>
            <Badge className='cursor-pointer rounded-sm' variant='outline'> <ListCheck/> Concluidas</Badge>
          </div>

          <div className='border-t'>

            <div className='flex h-10 justify-between items-center border-b'>
              <div className='bg-green-400 h-full w-1'/>
              <p className='flex-1 px-2'>Estudar Next.js</p>
              <div className='flex gap-3 items-center '>
                <SquareCheck size={18} className='cursor-pointer hover:scale-120'/>
                <Trash size={18} className='cursor-pointer hover:scale-120'/>
              </div>
            </div>

          </div>  

          <div className='flex items-center justify-between text-xs mt-4'>
            <div className='flex items-center gap-2'>
              <ListCheck size={16} />
              <p>Tarefas concluidas (3/3) </p>
            </div>
            <Button className='text-xs h-8 cursor-pointer text-xs' variant={'outline'}><Trash size={16} /> Limpar tarefas concluidas </Button>
          </div>

          <div className='h-1 w-full bg-gray-100 rounded-lg'>
            <div className='h-full bg-[#1447E6] rounded-lg' style={{width: '20%'}}></div>
          </div>

        </CardContent>
        <CardFooter className='flex items-center gap-1 justify-end text-sm'>
          <Sigma size={16}/>
          <p>3 tarefas no total</p>
        </CardFooter>
      </Card>
    </ div >
  )
}

export default Home;