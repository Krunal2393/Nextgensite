import { useEffect, useState } from "react";

// Define the Contact type
type Contact = {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  createdAt: string;
};

export default function ContactsTable() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchContacts() {
      try {
        const res = await fetch("http://localhost:5000/api/contact");
        if (!res.ok) {
          throw new Error("Failed to fetch contacts");
        }
        const data: Contact[] = await res.json();
        setContacts(data);
      } catch (err) {
        console.error("Failed to fetch contacts:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchContacts();
  }, []);

  const filtered = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      (c.company || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto my-18 p-6">
      <h1 className="text-2xl font-semibold mb-4">Admin Leads</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search leads..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded px-3 py-2 mb-4 w-full"
      />

      {loading ? (
        <p>Loading leads...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg shadow-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-3 border-b">Name</th>
                <th className="p-3 border-b">Email</th>
                <th className="p-3 border-b">Phone</th>
                <th className="p-3 border-b">Company</th>
                <th className="p-3 border-b">Created</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length > 0 ? (
                filtered.map((c) => (
                  <tr key={c._id} className="hover:bg-gray-50">
                    <td className="p-3 border-b">{c.name}</td>
                    <td className="p-3 border-b">{c.email}</td>
                    <td className="p-3 border-b">{c.phone || "-"}</td>
                    <td className="p-3 border-b">{c.company || "-"}</td>
                    <td className="p-3 border-b">
                      {new Date(c.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="p-4 text-center text-gray-500">
                    No leads found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
