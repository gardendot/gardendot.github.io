// src/pages/InfoPage.jsx
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function InfoPage({ title, content }) {
  return (
    <div className="text-gray-800 dark:text-gray-100">
      <Header  hideMenu hideCart />
      <Helmet>
        <title>{title} – Garden dot</title>
      </Helmet>
      <div className='px-4 py-12 max-w-3xl mx-auto  '>
      <h1 className="text-3xl font-bold mb-6 text-cyan-700 dark:text-cyan-300">{title}</h1>
      <div className="space-y-4 leading-relaxed text-lg">
        {content.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      </div>
      <Footer/>
    </div>
  );
}
