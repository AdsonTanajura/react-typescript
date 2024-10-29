import { createContext, ReactNode, useState } from 'react';

type Tema = 'claro' | 'escuro';

interface TemaContexto {
  tema: Tema;
  alteraTema: () => void;
}

export const TemaContext = createContext<TemaContexto | null>(null);

interface TemaProvideProps {
  children: ReactNode;
}

export const TemaProvider = ({ children }: TemaProvideProps) => {
  const [tema, setTema] = useState<Tema>('claro');

  const alteraTema = () => {
    setTema((temaAtual) => (temaAtual === 'claro' ? 'escuro' : 'claro'));
  };

  return (
    <TemaContext.Provider value={{ tema, alteraTema }}>
      {children}
    </TemaContext.Provider>
  );
};
