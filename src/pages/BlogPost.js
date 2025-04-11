import { useParams} from 'react-router-dom';

function BlogPost() {
    const { id } = useParams();
  
    return (
      <div style={{ padding: '2rem' }}>
        <h1>포스트 상세 페이지</h1>
        <p>이 포스트의 ID는 <strong>{id}</strong>입니다.</p>
      </div>
    );
  }
  
  export default BlogPost;