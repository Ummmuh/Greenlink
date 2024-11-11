import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="search-container">
                <div className="search-field">
                    <label htmlFor="quartier">Quartier</label>
                    <input type="text" id="quartier" placeholder="Entrez un quartier" />
                </div>
                <div className="search-field">
                    <label htmlFor="categories">Catégories</label>
                    <select id="categories">
                        <option value="">Sélectionnez catégorie</option>
                        <option value="1">Catégorie 1</option>
                        <option value="2">Catégorie 2</option>
                    </select>
                </div>
                <button className="search-btn">Rechercher</button>
            </div>
            <div className="action-buttons">
                <button className="action-btn">Vendre des déchets</button>
                <button className="action-btn">Acheter des déchets</button>
            </div>
        </header>
    );
};

export default Header;