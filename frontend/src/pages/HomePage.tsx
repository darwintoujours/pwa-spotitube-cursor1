import React from 'react';
import { useAuth } from '../hooks/useAuth';

const HomePage: React.FC = () => {
  const { isAuthenticated, user, loading, login } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Chargement...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Spotitube</h1>
          <p className="text-gray-300 mb-8">Votre musique privée, combinant Spotify et YouTube</p>
          <button
            onClick={login}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Se connecter avec Spotify
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Bienvenue, {user?.display_name} !</h1>
          <p className="text-gray-400">Découvrez votre musique sur Spotitube</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Section Recherche */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Recherche</h2>
            <p className="text-gray-400 mb-4">Trouvez vos morceaux préférés</p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Rechercher
            </button>
          </div>

          {/* Section Playlists */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Playlists</h2>
            <p className="text-gray-400 mb-4">Gérez vos playlists personnalisées</p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Voir les playlists
            </button>
          </div>

          {/* Section Bibliothèque */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Bibliothèque</h2>
            <p className="text-gray-400 mb-4">Vos morceaux sauvegardés</p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Ouvrir
            </button>
          </div>
        </div>

        {/* Section Recommandations */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Recommandations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="w-full h-32 bg-gray-700 rounded mb-3"></div>
              <h3 className="font-semibold">Morceau recommandé 1</h3>
              <p className="text-gray-400 text-sm">Artiste</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="w-full h-32 bg-gray-700 rounded mb-3"></div>
              <h3 className="font-semibold">Morceau recommandé 2</h3>
              <p className="text-gray-400 text-sm">Artiste</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="w-full h-32 bg-gray-700 rounded mb-3"></div>
              <h3 className="font-semibold">Morceau recommandé 3</h3>
              <p className="text-gray-400 text-sm">Artiste</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="w-full h-32 bg-gray-700 rounded mb-3"></div>
              <h3 className="font-semibold">Morceau recommandé 4</h3>
              <p className="text-gray-400 text-sm">Artiste</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage; 