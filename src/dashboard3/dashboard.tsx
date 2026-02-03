import './dashboard.css';

interface StatData {
  id: string;
  label: string;
  test: string;
  icon: string;
  trend: 'up' | 'down';
}

interface TrackingRow {
  id: string;
  date: string;
  name: string;
  phone: string;
  address: string;
  status: 'Completed' | 'On Delivery' | 'Rejected';
  service: string;
  trackingId: string;
  fee: string;
}

const stats: StatData[] = [
  { id: '1', label: 'For Pickup', test: '50', icon: '🚚', trend: 'up' },
  { id: '2', label: 'Processing', test: '40', icon: '📦', trend: 'down' },
  { id: '3', label: 'Completed', test: '30', icon: '✅', trend: 'up' },
  { id: '4', label: 'Rejected', test: '10', icon: '↩️', trend: 'down' },
];

const trackingData: TrackingRow[] = [
  { 
    id: '1', date: '13 Nov 25', name: 'Eleanor P', phone: '+256 77233412', 
    address: '2972 Namugongo Rd. Santa...', status: 'Completed', 
    service: 'CBC', trackingId: '#BM3470123', fee: 'shs.20000' 
  },
  { 
    id: '2', date: '12 Nov 23', name: 'Gaster ', phone: ' +256 77233412', 
    address: '1901 Kireka...', status: 'On Delivery', 
    service: 'CBS', trackingId: '#BM3470132', fee: 'shs.50000' 
  },
  { 
    id: '3', date: '10 Nov 23', name: 'Kevin Aseru', phone: '+256 77233412', 
    address: '4140 Mukono Rd. ', status: 'Rejected', 
    service: 'CBC', trackingId: '#BM2420123', fee: 'shs.60000' 
  },
  { 
    id: '4', date: '10 Nov 23', name: 'Bizzy B', phone: ' +256 77233412', 
    address: '6391 Bweyogera...', status: 'Completed', 
    service: 'CBC', trackingId: '#BM3489102', fee: 'shs.80000' 
  },
];

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);
const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
);
const MoreIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
);
const ArrowUpRight = () => (
   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
);

export default function Dashboard3 (){
  return (
    <main className="dashboard-container">
      <header className="header">
        <div className="header-title">
          <h1>Good afternoon,Bridget</h1>
          <span className="header-subtitle">Your Order Summary</span>
        </div>
        <div className="header-actions">
          <button className="icon-btn"><SearchIcon /></button>
          <button className="icon-btn"><BellIcon /></button>
          <button className="create-report-btn">Create Reports</button>
        </div>
      </header>

      <section className="top-section">
        
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card">
              <div className="stat-header">
                <div className="stat-icon">{stat.icon}</div>
                <ArrowUpRight />
              </div>
              <div>
                <h3 className="stat-value">{stat.test}</h3>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="revenue-card">
          <div className="revenue-content">
            <div className="card-header">
              <span style={{fontWeight: 600}}>Total Revenue</span>
              <span className="dropdown-badge">7 Days ▼</span>
            </div>
            
            <div className="chart-area">
              <div style={{display:'flex', flexDirection:'column', gap:'2rem', fontSize:'0.7rem', opacity: 0.7}}>
                <span>20k</span><span>15k</span><span>10k</span><span>5k</span><span>0</span>
              </div>
              {['12 Nov', '13 Nov', '14 Nov', '15 Nov', '15 Nov', '15 Nov', '15 Nov'].map((date, idx) => (
                <div key={idx} className="bar-container">
                  <div className={`bar ${idx === 2 ? 'active' : ''}`} style={{height: `${[40, 60, 90, 50 , 50, 70, 50][idx]}px`}}></div>
                  <span className="bar-label">{date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="services-card">
          <div className="card-header" style={{width: '100%'}}>
            <span style={{fontWeight: 600}}>Popular Tests</span>
            <MoreIcon />
          </div>
          
          <div className="donut-chart-container">
            <div className="donut">
              <div className="donut-hole">
                <span className="donut-label">TOTAL Orders</span>
                <span className="donut-total">189.238</span>
              </div>
            </div>
          </div>

          <div className="legend">
            <div className="legend-item">
              <div className="dot" style={{background: 'var(--accent-purple)'}}></div> <span>HIV</span>
            </div>
            <div className="legend-item">
              <div className="dot" style={{background: 'var(--accent-pink)'}}></div> <span>Pregrancy</span>
            </div>
            <div className="legend-item">
              <div className="dot" style={{background: '#3b82f6'}}></div> <span>CBC</span>
            </div>
          </div>
        </div>
      </section>

      <section className="tracking-section">
        <div className="table-header">
          <h3 style={{margin:0}}>Tracking List</h3>
          <div className="table-controls">
            <button className="filter-btn">Filter ▼</button>
            <button className="date-btn">13 Nov 23 - 18 Nov 23</button>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Customer Address</th>
              <th>Status</th>
              <th>Tests</th>
              <th>Tracking Number</th>
              <th>Fee</th>
            </tr>
          </thead>
          <tbody>
            {trackingData.map((row) => (
              <tr key={row.id}>
                <td style={{color: '#999', fontSize: '0.8rem'}}>{row.date}</td>
                <td>
                  <div className="user-cell">
                    <img src={`https://i.pravatar.cc/150?u=${row.id}`} alt="user" className="avatar" />
                    <div className="user-info">
                      <span className="user-name">{row.name}</span>
                      <span className="user-phone">{row.phone}</span>
                    </div>
                  </div>
                </td>
                <td style={{maxWidth: '200px'}}>{row.address}</td>
                <td>
                  <span className={`status-badge ${
                    row.status === 'Completed' ? 'status-completed' : 
                    row.status === 'On Delivery' ? 'status-delivery' : 'status-rejected'
                  }`}>
                    {row.status === 'On Delivery' ? '• On Delivery' : 
                     row.status === 'Rejected' ? '• Rejected' : '• Completed'}
                  </span>
                </td>
                <td>{row.service}</td>
                <td style={{fontFamily: 'monospace'}}>{row.trackingId}</td>
                <td>{row.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};
