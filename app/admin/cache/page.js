import { useState, useEffect } from "react";

const PAYLOAD_CMS_SERVER = process.env.PAYLOAD_CMS_SERVER;

const AdminPanel = () => {
  const [cacheKeys, setCacheKeys] = useState([]);
  const [selectedKey, setSelectedKey] = useState(null);
  const [keyData, setKeyData] = useState("");
  const [newValue, setNewValue] = useState("");
  const [newTtl, setNewTtl] = useState("");
  const [newKey, setNewKey] = useState("");
  const [ttl, setTtl] = useState(0);

  useEffect(() => {
    fetchCacheKeys();
  }, []);

  const fetchCacheKeys = async () => {
    try {
      const response = await fetch(`${PAYLOAD_CMS_SERVER}/api/cache-keys`);
      const data = await response.json();
      setCacheKeys(data);
    } catch (error) {
      console.error("Error fetching cache keys:", error);
    }
  };

  const fetchKeyDetails = async (key) => {
    setSelectedKey(key);
    try {
      const response = await fetch(
        `${PAYLOAD_CMS_SERVER}/api/cache-key/${key}`
      );
      const data = await response.json();
      setKeyData(data.value);
      setTtl(data.ttl || 0);
    } catch (error) {
      console.error("Error fetching key details:", error);
    }
  };

  const updateKey = async () => {
    if (!selectedKey) return;

    try {
      await fetch(`${PAYLOAD_CMS_SERVER}/api/cache-key/${selectedKey}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value: newValue, ttl: parseInt(ttl) }),
      });
      console.log(`Key ${selectedKey} updated successfully`);
      fetchCacheKeys(); // Refresh cache keys
      setSelectedKey(null);
      setNewValue("");
      setTtl(0);
    } catch (error) {
      console.error("Error updating key:", error);
    }
  };

  const deleteKey = async () => {
    if (!selectedKey) return;

    try {
      await fetch(`${PAYLOAD_CMS_SERVER}/api/cache-key/${selectedKey}`, {
        method: "DELETE",
      });
      console.log(`Key ${selectedKey} deleted successfully`);
      fetchCacheKeys(); // Refresh cache keys
      setSelectedKey(null);
      setNewValue("");
      setTtl(0);
    } catch (error) {
      console.error("Error deleting key:", error);
    }
  };

  const addKey = async () => {
    if (!newKey.trim()) return;

    try {
      await fetch(`${PAYLOAD_CMS_SERVER}/api/cache-key`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          key: newKey,
          value: newValue,
          ttl: parseInt(newTtl) || 60,
        }),
      });
      console.log(`Key ${newKey} added successfully`);
      fetchCacheKeys(); // Refresh cache keys
      setSelectedKey(newKey);
      setNewKey("");
      setNewValue("");
      setNewTtl("");
    } catch (error) {
      console.error("Error adding key:", error);
    }
  };

  const revalidateTag = async (key) => {
    try {
      await fetch(`${PAYLOAD_CMS_SERVER}/api/revalidate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: key }),
      });
      console.log(`Cache revalidated for key: ${key}`);
    } catch (error) {
      console.error("Error revalidating cache:", error);
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Left Panel: Keys */}
      <div
        style={{
          width: "30%",
          overflowY: "scroll",
          borderRight: "1px solid #ccc",
          padding: "10px",
        }}>
        <h3>Cache Keys</h3>
        <ul>
          {cacheKeys.map((key) => (
            <li
              key={key}
              style={{
                padding: "5px",
                cursor: "pointer",
                backgroundColor:
                  selectedKey === key ? "#f0f0f0" : "transparent",
              }}
              onClick={() => fetchKeyDetails(key)}>
              {key}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Panel: Key Details */}
      <div style={{ flex: 1, padding: "10px" }}>
        <h3>Key Details</h3>
        {selectedKey ? (
          <div>
            <p>
              <strong>Key:</strong> {selectedKey}
            </p>
            <label>Value:</label>
            <textarea
              value={keyData}
              onChange={(e) => setNewValue(e.target.value)}
              rows="5"
              style={{ width: "100%" }}
            />
            <label>TTL (seconds):</label>
            <input
              type="number"
              value={ttl}
              onChange={(e) => setTtl(e.target.value)}
              style={{ width: "100%" }}
            />
            <button onClick={updateKey}>Update Key</button>
            <button
              onClick={deleteKey}
              style={{ marginLeft: "10px", color: "red" }}>
              Delete Key
            </button>
          </div>
        ) : (
          <p>Select a key to view details</p>
        )}

        <hr />
        <h3>Add New Key</h3>
        <input
          type="text"
          placeholder="Key"
          value={newKey}
          onChange={(e) => setNewKey(e.target.value)}
          style={{ width: "100%", marginBottom: "5px" }}
        />
        <textarea
          placeholder="Value"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          rows="3"
          style={{ width: "100%", marginBottom: "5px" }}
        />
        <input
          type="number"
          placeholder="TTL (seconds)"
          value={newTtl}
          onChange={(e) => setNewTtl(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <button onClick={addKey}>Add Key</button>
      </div>
    </div>
  );
};

export default AdminPanel;
