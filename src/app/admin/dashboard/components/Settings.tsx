import React, { useState } from 'react';

const Settings: React.FC = () => {
 
  const initialSettings = [
    {
      id: 1,
      name: "General Settings",
      description: "Configure general settings of the website.",
      enabled: true,
    },
    {
      id: 2,
      name: "Email Notifications",
      description: "Manage email notification settings.",
      enabled: true,
    },
    {
      id: 3,
      name: "User Management",
      description: "Control user management options.",
      enabled: false,
    }
  ];


  const [settings, setSettings] = useState(initialSettings);

  const toggleSetting = (id: number) => {
    const updatedSettings = settings.map(setting => {
      if (setting.id === id) {
        return { ...setting, enabled: !setting.enabled };
      }
      return setting;
    });
    setSettings(updatedSettings);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Manage Settings</h1>
      <div>
      
        {settings.map(setting => (
          <div key={setting.id} className="bg-secondBg shadow-md rounded-md p-6 mb-4">
            <h2 className="text-xl font-semibold mb-2">{setting.name}</h2>
            <p>{setting.description}</p>
         
            <div className="mt-4">
              <button
                className={`${
                  setting.enabled ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
                } text-white font-bold py-2 px-4 rounded`}
                onClick={() => toggleSetting(setting.id)}
              >
                {setting.enabled ? 'Enabled' : 'Disabled'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;