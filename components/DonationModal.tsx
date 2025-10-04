
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [amount, setAmount] = useState('25');
  const [customAmount, setCustomAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const donationAmounts = [10, 25, 50, 100];

  const handleClose = () => {
    // Reset form state on close
    setTimeout(() => {
        setIsSubmitted(false);
        setName('');
        setEmail('');
        setAmount('25');
        setCustomAmount('');
        setError('');
    }, 300); // Delay to allow for closing animation
    onClose();
  };
  
  // Effect to handle 'Escape' key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setError(t('donation_error_fields'));
      return;
    }
    const finalAmount = amount === 'custom' ? customAmount : amount;
    if (!finalAmount || parseFloat(finalAmount) <= 0 || isNaN(parseFloat(finalAmount))) {
        setError(t('donation_error_amount'));
        return;
    }
    setError('');
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[100] p-4" 
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="donation-modal-title"
    >
      <div 
        className="bg-white rounded-lg shadow-2xl max-w-lg w-full relative transform" 
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10" aria-label={t('close_modal')}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div className="p-8">
            {!isSubmitted ? (
                <>
                    <h2 id="donation-modal-title" className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">{t('donation_title')}</h2>
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-semibold mb-3">{t('donation_amount')}</label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
                                {donationAmounts.map((val) => (
                                    <button type="button" key={val} onClick={() => { setAmount(val.toString()); setCustomAmount(''); }} className={`w-full py-2 px-4 rounded-md border-2 transition-colors ${amount === val.toString() ? 'bg-[#00a95a] text-white border-[#00a95a]' : 'bg-white text-gray-700 border-gray-300 hover:border-[#00a95a]'}`}>
                                        ${val}
                                    </button>
                                ))}
                            </div>
                             <input
                                type="number"
                                placeholder={t('donation_custom_amount')}
                                value={customAmount}
                                onClick={() => setAmount('custom')}
                                onChange={(e) => {
                                    setCustomAmount(e.target.value);
                                    setAmount('custom');
                                }}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00a95a] focus:outline-none"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">{t('donation_full_name')}</label>
                            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00a95a] focus:outline-none" required />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">{t('donation_email')}</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00a95a] focus:outline-none" required />
                        </div>
                        
                        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

                        <button type="submit" className="w-full bg-[#ff6600] text-white py-3 rounded-full hover:bg-[#e65c00] transition-transform duration-300 hover:scale-105 text-lg font-semibold shadow-lg">
                            {t('donate_button')}
                        </button>
                    </form>
                </>
            ) : (
                <div className="text-center py-8">
                    <svg className="w-16 h-16 text-[#00a95a] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{t('donation_success_title')}</h2>
                    <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: t('donation_success_message').replace('{name}', `<strong>${name}</strong>`)}}></p>
                    <button onClick={handleClose} className="mt-8 bg-gray-200 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-300 transition-colors">
                        {t('close_modal')}
                    </button>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default DonationModal;
