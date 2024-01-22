import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Frontend Developer | UX UI
        </p>
      </header>
      <footer className='App-footer'>
        <a href='https://www.linkedin.com/in/andres-felipe-larrotta-pino-97772849/' target='_blank' rel="noreferrer">
          <svg className="App-icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 0C6.71484 0 0 6.71484 0 15C0 23.2852 6.71484 30 15 30C23.2852 30 30 23.2852 30 15C30 6.71484 23.2852 0 15 0ZM10.8047 21.2754H7.88086V11.918H10.8047V21.2754ZM9.26367 10.7461H9.24023C8.17969 10.7461 7.49414 10.0313 7.49414 9.12305C7.49414 8.19727 8.20312 7.5 9.28125 7.5C10.3594 7.5 11.0215 8.19727 11.0449 9.12305C11.0508 10.0254 10.3652 10.7461 9.26367 10.7461ZM22.5 21.2754H19.1836V16.4355C19.1836 15.1699 18.668 14.3027 17.5254 14.3027C16.6523 14.3027 16.166 14.8887 15.9434 15.4512C15.8613 15.6504 15.873 15.9316 15.873 16.2187V21.2754H12.5859C12.5859 21.2754 12.627 12.6973 12.5859 11.918H15.873V13.3887C16.0664 12.7441 17.1152 11.8301 18.791 11.8301C20.8711 11.8301 22.5 13.1777 22.5 16.0723V21.2754Z"
              fill="#F8FF64"
            />
          </svg>

        </a>
        <a href='https://github.com/andreslarrotta' target='_blank' rel="noreferrer">
          <svg className="App-icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15 30C23.2842 30 30 23.2842 30 15C30 6.71572 23.2842 0 15 0C6.71572 0 0 6.71572 0 15C0 23.2842 6.71572 30 15 30ZM8.30049 7.62596L8.2974 7.62711C7.89003 7.77914 7.56823 8.10063 7.41615 8.50798C7.40308 8.54301 7.39029 8.57812 7.37781 8.6133C6.976 9.745 6.86931 10.9743 7.05892 12.1587C7.06863 12.2193 7.07913 12.2799 7.0904 12.3404C7.04708 12.4098 7.00498 12.4802 6.96417 12.5513C6.31689 13.6781 5.98473 14.9921 6.00054 16.3224C6.00222 19.1744 6.75124 21.2084 8.12176 22.5671C9.46419 23.8979 11.1773 24.3501 12.6006 24.5436L12.6462 24.5496C14.232 24.7855 15.7635 24.7721 17.3443 24.5075L17.3464 24.5072C18.7755 24.3338 20.503 23.9036 21.8589 22.5797C23.2441 21.2271 23.9977 19.1876 23.9994 16.3223C24.0153 14.9921 23.6831 13.6781 23.0358 12.5513C22.995 12.48 22.9527 12.4096 22.9093 12.3399C22.9206 12.2796 22.931 12.2191 22.9407 12.1587C23.1303 10.9688 23.0197 9.73386 22.6102 8.59917C22.5987 8.56695 22.5867 8.53472 22.5745 8.5025C22.422 8.09883 22.1031 7.78038 21.6992 7.62854L21.6973 7.62786L21.6955 7.62719L21.6919 7.62583L21.6846 7.62313L21.6693 7.61768L21.6372 7.60672C21.615 7.5994 21.5913 7.5921 21.5661 7.58496C21.5157 7.57064 21.4593 7.55699 21.3972 7.54499C20.6779 7.40606 19.484 7.53523 17.7609 8.7076C17.7212 8.73466 17.6811 8.7623 17.6407 8.7905C17.5428 8.7666 17.4447 8.74407 17.3464 8.72286C15.7783 8.38461 14.1677 8.38846 12.6006 8.73442C12.5199 8.75221 12.4395 8.77092 12.3591 8.79051C12.3187 8.76231 12.2787 8.73468 12.2388 8.7076C10.5088 7.53115 9.30999 7.40634 8.59301 7.54556C8.53211 7.55738 8.47692 7.57077 8.42745 7.58476C8.40273 7.59175 8.37949 7.59888 8.35773 7.60602L8.32621 7.6167L8.31131 7.62201L8.30406 7.62465L8.30049 7.62596Z" fill="#F8FF64" />
          </svg>

        </a>
        <a href='https://www.behance.net/andreslarrotta911' target='_blank' rel="noreferrer">
          <svg className="App-icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.1621 14.3262C19.875 14.0801 19.5176 13.957 19.0957 13.957C18.6387 13.957 18.2813 14.0859 18.0234 14.3496C17.7715 14.6133 17.6133 14.9648 17.543 15.4102H20.6309C20.6074 14.9355 20.4434 14.5781 20.1621 14.3262Z" fill="#F8FF64" />
            <path d="M12.5566 15.5918C12.334 15.4922 12.0293 15.4395 11.6309 15.4336H9.3457V17.9063H11.6016C12.0059 17.9063 12.3164 17.8535 12.5391 17.7422C12.9492 17.5371 13.1484 17.1563 13.1484 16.5879C13.1484 16.1074 12.9492 15.7734 12.5566 15.5918Z" fill="#F8FF64" />
            <path d="M15 0C6.71484 0 0 6.71484 0 15C0 23.2852 6.71484 30 15 30C23.2852 30 30 23.2852 30 15C30 6.71484 23.2852 0 15 0ZM17.0859 10.6816H21.0586V11.8359H17.0859V10.6816ZM14.6895 18.1992C14.5137 18.4863 14.2969 18.7324 14.0332 18.9258C13.7402 19.1543 13.3887 19.3066 12.9844 19.3945C12.5801 19.4766 12.1465 19.5176 11.6719 19.5176H7.5V10.248H11.9824C13.1133 10.2656 13.916 10.5938 14.3848 11.2383C14.666 11.6309 14.8066 12.1055 14.8066 12.6562C14.8066 13.2188 14.666 13.6758 14.3789 14.0215C14.2207 14.2148 13.9805 14.3906 13.6699 14.5488C14.1445 14.7246 14.502 14.9941 14.7422 15.3691C14.9824 15.7441 15.1055 16.1953 15.1055 16.7285C15.1055 17.2676 14.9648 17.7598 14.6895 18.1992ZM22.5 16.5938H17.5078C17.5371 17.2793 17.7715 17.7656 18.2227 18.041C18.498 18.2109 18.8262 18.2988 19.2129 18.2988C19.6172 18.2988 19.9512 18.1934 20.209 17.9824C20.3496 17.8711 20.4727 17.7129 20.5781 17.5078H22.4062C22.3594 17.9121 22.1367 18.3281 21.7441 18.75C21.1289 19.418 20.2734 19.752 19.166 19.752C18.252 19.752 17.4492 19.4707 16.752 18.9082C16.0547 18.3457 15.7031 17.4316 15.7031 16.166C15.7031 14.9766 16.0195 14.0684 16.6465 13.4355C17.2793 12.8027 18.0937 12.4863 19.0957 12.4863C19.6934 12.4863 20.2324 12.5918 20.707 12.8086C21.1875 13.0195 21.5801 13.3594 21.8906 13.8223C22.1719 14.2266 22.3535 14.7012 22.4355 15.2402C22.4883 15.5508 22.5059 16.002 22.5 16.5938Z" fill="#F8FF64" />
            <path d="M12.5859 13.6699C12.8379 13.5176 12.9609 13.2422 12.9609 12.8555C12.9609 12.4219 12.7969 12.1406 12.4629 12C12.1758 11.9062 11.8125 11.8535 11.3672 11.8535H9.35156V13.8984H11.6016C12.0059 13.9043 12.3281 13.8281 12.5859 13.6699Z" fill="#F8FF64" />
          </svg>

        </a>
      </footer>
    </div>
  );
}

export default App;
