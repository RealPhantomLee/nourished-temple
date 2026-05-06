'use client'

import { useEffect, useState } from 'react'
import { Search, Eye, X, Mail, Calendar } from 'lucide-react'

interface Contact {
  id: string
  name: string
  email: string
  phone: string | null
  subject: string
  message: string
  preferredContact: string | null
  heardFrom: string | null
  healthConcerns: string | null
  alkalineLevel: string | null
  dietaryRestrictions: string | null
  createdAt: string
}

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)

  useEffect(() => {
    fetch('/api/admin?action=contacts')
      .then((res) => res.json())
      .then((data) => {
        setContacts(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const filtered = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.subject.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin w-8 h-8 border-3 border-nt-green-700 border-t-transparent rounded-full" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header + search */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-nt-green-300" />
          <input
            type="text"
            placeholder="Search contacts by name, email, or subject..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white/70 backdrop-blur-md border border-white/20 rounded-lg text-sm focus:ring-2 focus:ring-nt-green-600 focus:border-transparent outline-none placeholder:text-nt-green-600 text-nt-green-950"
          />
        </div>
        <p className="text-sm text-nt-green-200">
          {filtered.length} message{filtered.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Contacts list */}
      <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-sm border border-white/20 overflow-hidden">
        <div className="divide-y divide-white/10">
          {filtered.length > 0 ? (
            filtered.map((contact) => (
              <div
                key={contact.id}
                className="px-6 py-5 hover:bg-white/10 transition-colors cursor-pointer"
                onClick={() => setSelectedContact(contact)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-semibold text-nt-green-950">{contact.name}</h4>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-nt-green-200/40 text-nt-green-800">
                        {contact.subject}
                      </span>
                    </div>
                    <p className="text-sm text-nt-green-700 flex items-center gap-1">
                      <Mail className="w-3 h-3" />
                      {contact.email}
                    </p>
                    <p className="text-sm text-nt-green-600 mt-2 line-clamp-2">
                      {contact.message}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedContact(contact)
                      }}
                      className="p-2 text-nt-green-300 hover:bg-white/20 rounded-lg transition-colors"
                      title="View details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <p className="text-xs text-nt-green-400 mt-2 flex items-center justify-end gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="px-6 py-12 text-center text-nt-green-300">
              {search ? 'No contacts match your search' : 'No contact submissions yet'}
            </div>
          )}
        </div>
      </div>

      {/* Contact detail modal */}
      {selectedContact && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedContact(null)}
        >
          <div
            className="bg-white/95 backdrop-blur-xl rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-auto border border-white/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white/90 backdrop-blur-xl border-b border-white/20 px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-nt-green-950">
                  Message from {selectedContact.name}
                </h3>
                <p className="text-sm text-nt-green-600 mt-0.5">{selectedContact.subject}</p>
              </div>
              <button
                onClick={() => setSelectedContact(null)}
                className="p-2 hover:bg-nt-green-100/50 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-nt-green-600" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Contact info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-nt-green-50/50 rounded-lg">
                  <p className="text-xs text-nt-green-500 uppercase tracking-wider mb-1">Email</p>
                  <p className="text-sm font-medium text-nt-green-900">{selectedContact.email}</p>
                </div>
                {selectedContact.phone && (
                  <div className="p-4 bg-nt-green-50/50 rounded-lg">
                    <p className="text-xs text-nt-green-500 uppercase tracking-wider mb-1">Phone</p>
                    <p className="text-sm font-medium text-nt-green-900">{selectedContact.phone}</p>
                  </div>
                )}
                {selectedContact.preferredContact && (
                  <div className="p-4 bg-nt-green-50/50 rounded-lg">
                    <p className="text-xs text-nt-green-500 uppercase tracking-wider mb-1">Preferred Contact</p>
                    <p className="text-sm font-medium text-nt-green-900 capitalize">{selectedContact.preferredContact}</p>
                  </div>
                )}
                <div className="p-4 bg-nt-green-50/50 rounded-lg">
                  <p className="text-xs text-nt-green-500 uppercase tracking-wider mb-1">Received</p>
                  <p className="text-sm font-medium text-nt-green-900">
                    {new Date(selectedContact.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Message */}
              <div>
                <p className="text-xs text-nt-green-500 uppercase tracking-wider mb-2">Message</p>
                <div className="p-4 bg-nt-green-50/30 rounded-lg">
                  <p className="text-sm text-nt-green-800 whitespace-pre-wrap">{selectedContact.message}</p>
                </div>
              </div>

              {/* Health details */}
              {(selectedContact.healthConcerns || selectedContact.alkalineLevel || selectedContact.dietaryRestrictions) && (
                <div className="space-y-3">
                  <p className="text-xs text-nt-green-500 uppercase tracking-wider">Health Information</p>
                  {selectedContact.healthConcerns && (
                    <div className="p-4 bg-amber-50/50 rounded-lg">
                      <p className="text-xs text-amber-600 uppercase tracking-wider mb-1">Health Concerns</p>
                      <p className="text-sm text-amber-900">{selectedContact.healthConcerns}</p>
                    </div>
                  )}
                  {selectedContact.alkalineLevel && (
                    <div className="p-4 bg-blue-50/50 rounded-lg">
                      <p className="text-xs text-blue-600 uppercase tracking-wider mb-1">Alkaline Level</p>
                      <p className="text-sm text-blue-900">{selectedContact.alkalineLevel}</p>
                    </div>
                  )}
                  {selectedContact.dietaryRestrictions && (
                    <div className="p-4 bg-purple-50/50 rounded-lg">
                      <p className="text-xs text-purple-600 uppercase tracking-wider mb-1">Dietary Restrictions</p>
                      <p className="text-sm text-purple-900">{selectedContact.dietaryRestrictions}</p>
                    </div>
                  )}
                </div>
              )}

              {selectedContact.heardFrom && (
                <div className="p-4 bg-nt-green-50/30 rounded-lg">
                  <p className="text-xs text-nt-green-500 uppercase tracking-wider mb-1">Heard From</p>
                  <p className="text-sm text-nt-green-800">{selectedContact.heardFrom}</p>
                </div>
              )}

              {/* Reply action */}
              <div className="flex gap-3 pt-2">
                <a
                  href={`mailto:${selectedContact.email}?subject=Re: ${selectedContact.subject}`}
                  className="flex-1 py-3 px-4 bg-nt-green-700 text-white text-center font-medium rounded-lg hover:bg-nt-green-800 transition-colors"
                >
                  Reply via Email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
