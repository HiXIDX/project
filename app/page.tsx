import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export default async function Page() {
  const supabase = await createClient()

  // 1. ดึงข้อมูลมาแสดง
  const { data: posts, error } = await supabase.from('posts').select('*')

  // 2. ฟังก์ชันเพิ่มข้อมูล (Server Action)
  async function addPost(formData: FormData) {
    'use server'
    const title = formData.get('title') as string
    
    if (!title) return

    const supabase = await createClient()
    
    // บันทึกลง Supabase
    const { error } = await supabase.from('posts').insert({ title })
    
    if (error) {
      console.error('Error inserting data:', error.message)
      return
    }

    // สั่งให้ Next.js ดึงข้อมูลใหม่มาโชว์ทันที
    revalidatePath('/')
  }

  return (
    <main style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Supabase Connection Test</h1>

      {/* ฟอร์มสำหรับป้อนข้อมูล */}
      <form action={addPost} style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        <input
          type="text"
          name="title"
          placeholder="พิมพ์ข้อความทดสอบ..."
          required
          style={{ padding: '8px', flex: 1 }}
        />
        <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer' }}>
          เพิ่มข้อมูล
        </button>
      </form>

      <hr />

      {/* แสดงรายการข้อมูล */}
      <h2>รายการใน Database:</h2>
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      
      <ul>
        {posts?.map((post) => (
          <li key={post.id} style={{ marginBottom: '8px' }}>
            {post.title}
          </li>
        ))}
      </ul>
    </main>
  )
}