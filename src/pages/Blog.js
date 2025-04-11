import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import posts from '../data/posts';
import logs from '../data/logs';
import '../Blog.css';
function Blog(){

    const [activeTab, setActiveTab] = useState('posts');
    return(
        <>
            <main>
                <div className="tab_contents">
                    <ul id="contentsTab" className="list_tab">
                        <li>
                            <a href="#posts"
                            className={activeTab === 'posts' ? 'active': ''}
                            onClick={(e) => { e.preventDefault(); setActiveTab('posts')}}><span className='txt_tab'>Posts</span> </a>
                        </li>
                        <li>
                            <a href="#logs" className={activeTab === 'logs' ? 'active': ''}
                            onClick={(e) => { e.preventDefault(); setActiveTab('logs')}}><span className='txt_tab'>Logs</span> </a>
                        </li>
                    </ul>
                </div>
                <div className="TabContents">
                    {activeTab === 'posts' && (

                     <div className="wrap_post_list">
                        <ul>
                            { posts.map((post) => (
                                <li>
                                    <Link to={`/blog/post/${post.id}`}>
                                        <div class="post_title">
                                            <strong>{post.title}</strong>
                                        </div>
                                        <div class="post_summary">
                                            {post.summary}
                                        </div>
                                        <div class="post_append">
                                            <span>{post.date}</span>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                     </div>
                    )}
                    {activeTab === 'logs' && (
                     <div className="wrap_log_list">
                     <ul>
                            { logs.map((log) => (
                                <li>
                                    <Link to={`/blog/log/${log.id}`}>
                                        <div class="log_title">
                                            <strong>{log.title}</strong>
                                        </div>
                                        <div class="log_summary">
                                            {log.summary}
                                        </div>
                                        <div class="log_append">
                                            <span>{log.date}</span>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                     </div>
                    )}
                </div>
            </main>
        </>
    )
} 

export default Blog;