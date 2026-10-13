'use client';
import { useState, type FormEvent } from 'react';
type State = 'idle' | 'submitting' | 'success' | 'error';
export function InquiryForm() {
 const [status,setStatus]=useState<State>('idle');
 const [message,setMessage]=useState('');
 async function submit(event:FormEvent<HTMLFormElement>) {
   event.preventDefault();
   const form=event.currentTarget;
   setStatus('submitting');setMessage('');
   const data=new FormData(form);
   const payload={name:String(data.get('name')||''),email:String(data.get('email')||''),organization:String(data.get('organization')||''),subject:String(data.get('subject')||''),message:String(data.get('message')||''),website:String(data.get('website')||''),consent:data.get('consent')==='yes'};
   try {
     const response=await fetch('/api/inquiries',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
     if(!response.ok) {setStatus('error');setMessage(response.status===503?'The inquiry service is not yet available. Please try again later.':'We could not submit your inquiry. Please check the details and try again.');return;}
     setStatus('success');setMessage('Your inquiry has been submitted. Thank you for contacting Vitalworks.');form.reset();
   } catch {setStatus('error');setMessage('The connection was interrupted. Please try again later.');}
 }
 return <form className="inquiry-form" onSubmit={submit} aria-label="Business inquiry form">
   <div className="form-pair"><label>Full name <span aria-hidden="true">*</span><input name="name" autoComplete="name" required maxLength={120} /></label><label>Work email <span aria-hidden="true">*</span><input name="email" type="email" autoComplete="email" required maxLength={254}/></label></div>
   <div className="form-pair"><label>Organization<input name="organization" autoComplete="organization" maxLength={160}/></label><label>Area of interest<select name="subject" required defaultValue=""><option value="" disabled>Select an area</option><option>Software & platforms</option><option>Enterprise integration</option><option>Cloud & infrastructure</option><option>Data, analytics & AI</option><option>Cybersecurity & privacy</option><option>Managed services & advisory</option><option>Partnerships</option><option>Other inquiry</option></select></label></div>
   <label>How can we help? <span aria-hidden="true">*</span><textarea name="message" required minLength={20} maxLength={4000} rows={6} placeholder="Tell us about your objectives, timelines and requirements."/></label>
   <label className="form-consent"><input type="checkbox" name="consent" value="yes" required/> <span>I agree to Vitalworks processing these details to respond to my inquiry.</span></label>
   <div className="honeypot" aria-hidden="true"><label>Leave this field blank<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
   <div className="form-submit"><button className="button button-dark" type="submit" disabled={status==='submitting'}>{status==='submitting'?'Sending…':'Send inquiry'} <span aria-hidden="true">↗</span></button><p role="status" aria-live="polite" className={status==='error'?'form-error':'form-status'}>{message}</p></div>
 </form>;
}
