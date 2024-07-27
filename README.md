# Project structure

- **src/app**  
app router ของ Nextjs โดยจะทำ logic ของฝั่ง server side, การทำงานกับ api เพื่อส่งข้อมูลต่อไปให้ component  

- **src/authentication**  
รวม logic ของการ authentication และ logic authorization ต่างๆ ในกรณที่ต้องมีการเช็ค permission ด้วย  

- **src/constants**  
shared constant, enum  

- **src/components**  
ไว้ใส่ component โดยจะพยายามไม่มี nested folder หรือถ้าจำเป็นต้องมีจริงๆ จะ nested แค่ขั้นเดียว  

- **src/containers**  
เหมือนเป็นส่วนแสดงผลของหน้า page และถ้ามี logic ที่ติดต่อกับ server side component จะถูกทำที่นี่  

- **src/helpers**  
helper function และ utility function ต่างๆ  

- **src/hooks**  
ไว้ใส่ custom hook  

- **src/layouts**  
component ที่ใช้เป็น layout  

- **src/schema**  
ส่วนที่เกี่ยวกับการทำ schema ของหน้า html เช่น meta, jsonld  

- **src/services**  
function สำหรับการ call api, parse data ให้ตรงกับ format ของ api ที่จะ call และ parse response จากภายนอกให้อยู่ใน format ที่ใช้ภายใน app  

- **src/styles**  
shared style, global css และ constant ของ style ต่างๆ เช่น color  

- **src/types**  
shared type โดยจะมี folder ย่อย  
  - common - type ที่มีการใช้งานร่วมกันต่างๆ ไม่ได้เจาะจงเป็นพิเศษ  
  - component - type ที่ถูกใช้งานกับ component และต้องการ share ให้ component อื่นเอาไปใช้งานด้วย  
  - fetch - type ที่ใช้งานกับ function fetch  
  - service - request body และ response ที่ใช้กับ service  

# Component Convention

```tsx
export interface ExampleProps {} // <-- props type และ constant ต่างๆ จะอยู่ข้างบน component

export const Example = (props: ExampleProps): ReactElement => {
  // hook ต่างๆ จะอยู่ข้างบน
  const [a, setA] = useState<string>('a') 

  useEffect(() => {}, [])

  // function และ variable ทั่วๆ ไปจะอยู่ต่อจาก hook
  const b = `${a}+b`
  const c = (): string => { setA(`c`) }

  return <StyledExample>{b}</StyledExample>
}

interface StyledExampleProp {}

const StyledExample = styled.dev<StyledExampleProp>`` // <-- styled จะอยู่ข้างล่าง component
```