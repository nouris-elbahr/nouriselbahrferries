import { useMemo, useState } from "react";

/**
 * =====================================================
 * ONE-FILE — Schema-driven flow (Type → Subtype → Fields)
 * Steps:
 * 0 Booking  •  1 Trips  •  2 Types  •  3 Subtypes
 * 4..N Forms (one per selected subtype)  •  Review
 * =====================================================
 */

/* =======================
 * DATA / CONFIG
 * ======================= */

const FEES = {
  base: 75,
  extraLegroomMultiplier: 1.2,
  exclusiveCabinMultiplier: 2,
};

const DEMO_BOOKING = {
  number: "125225",
  passenger: "John Doe",
  phone: "+213 123 456 789",
  email: "john.doe@example.com",
  routes: {
    aller: {
      title: "Outbound (Aller)",
      route: "ALG → MAR",
      date: "22 Feb 2025 | 08:00",
    },
    retour: {
      title: "Return (Retour)",
      route: "MAR → ALG",
      date: "02 Mar 2025 | 16:00",
    },
  },
  passengers: [
    { id: "p1", name: "John Doe" },
    { id: "p2", name: "Jane Doe" },
  ],
  vehicles: [
    { id: "v1", plate: "123-ALG", make: "CITROËN", model: "C4", type: "car" },
  ],
  cabins: [{ id: "c1", type: "Economy", number: "E-12" }],
  seats: [
    { id: "s1", seatNumber: "A4" },
    { id: "s2", seatNumber: "B2" },
  ],
};

const MAX_PASSENGERS = 6;

const MOD_TYPES = [
  { id: "passenger", label: "Passenger", icon: "👤" },
  { id: "vehicle", label: "Vehicle", icon: "🚗" },
  { id: "cabin", label: "Cabin", icon: "🛏️" },
  { id: "seat", label: "Seat", icon: "💺" },
  { id: "date", label: "Date", icon: "📅" },
  { id: "cancel", label: "Cancellation", icon: "🛑" }, // NEW
];

const TYPE_LABEL = MOD_TYPES.reduce((m, t) => ((m[t.id] = t.label), m), {});

/** Simple helpers */
const cx = (...c) => c.filter(Boolean).join(" ");
const card = "rounded-xl border-2 p-6 bg-white";

/** Is route international? */
const isInternational = (routeLabel) => {
  const parts = routeLabel.split("→").map((s) => s.trim());
  return parts.length === 2 && parts[0].slice(0, 3) !== parts[1].slice(0, 3);
};

/* =======================
 * SCHEMA
 * ======================= */

const MOD_SCHEMA = {
  passenger: {
    add: {
      title: "Add Passenger",
      fields: [
        {
          key: "fullName",
          label: "Full Name",
          type: "text",
          required: true,
          placeholder: "First Middle Last",
        },
        { key: "dob", label: "Date of Birth", type: "date", required: true },
        {
          key: "nationality",
          label: "Nationality",
          type: "select",
          required: true,
          options: [
            "Algerian",
            "Moroccan",
            "Tunisian",
            "French",
            "Spanish",
            "Other",
          ],
        },
        {
          key: "docType",
          label: "ID Type",
          type: "select",
          required: true,
          options: ["Passport", "National ID", "Driver’s License"],
        },
        { key: "docNumber", label: "ID Number", type: "text", required: true },
        { key: "docExpiry", label: "ID Expiry", type: "date", required: true },
        {
          key: "docCountry",
          label: "Issuing Country",
          type: "select",
          required: true,
          options: [
            "Algeria",
            "Morocco",
            "Tunisia",
            "France",
            "Spain",
            "Other",
          ],
        },
        { key: "email", label: "Email", type: "text", required: true },
        { key: "phone", label: "Phone", type: "text", required: true },
        { key: "wheelchair", label: "Wheelchair", type: "checkbox" },
        {
          key: "diet",
          label: "Dietary Restrictions",
          type: "select",
          options: ["None", "Vegan", "Halal", "Gluten-free"],
        },
        { key: "medical", label: "Medical Conditions", type: "textarea" },
      ],
      validate: (vals, ctx) => {
        const errs = {};
        for (const f of MOD_SCHEMA.passenger.add.fields) {
          if (f.required && !String(vals[f.key] ?? "").trim())
            errs[f.key] = "Required";
        }
        if (ctx.international && vals.docType === "Driver’s License") {
          errs.docType = "International routes require Passport/National ID";
        }
        if ((ctx.currentPassengerCount ?? 0) + 1 > MAX_PASSENGERS) {
          errs._form = `Maximum passengers per booking is ${MAX_PASSENGERS}`;
        }
        return errs;
      },
      hints: (vals, ctx) => {
        const notes = [];
        if (ctx.international)
          notes.push("ID verification required for international routes.");
        return notes;
      },
      defaults: { diet: "None", wheelchair: false },
    },
    remove: {
      title: "Remove Passenger",
      fields: [
        {
          key: "passengerId",
          label: "Select Passenger",
          type: "select",
          required: true,
          optionsFrom: "passengers",
        },
        {
          key: "reason",
          label: "Reason",
          type: "select",
          options: ["", "Cancellation", "No-show", "Other"],
        },
      ],
      validate: (vals, ctx) => {
        const errs = {};
        if (!vals.passengerId) errs.passengerId = "Required";
        if ((ctx.currentPassengerCount ?? 1) - 1 < 1)
          errs._form = "Booking must keep at least one passenger.";
        return errs;
      },
      hints: () => ["Refund eligibility shown based on fare rules."],
      defaults: {},
    },
    update: {
      title: "Update Passenger",
      fields: [
        {
          key: "passengerId",
          label: "Select Passenger",
          type: "select",
          required: true,
          optionsFrom: "passengers",
        },
        {
          key: "nameCorrection",
          label: "Name Correction (typos only)",
          type: "text",
          placeholder: "Corrected full name",
        },
        {
          key: "docUpload",
          label: "New ID Document (if expired)",
          type: "upload",
        },
        { key: "email", label: "Email", type: "text" },
        { key: "phone", label: "Phone", type: "text" },
        { key: "wheelchair", label: "Wheelchair", type: "checkbox" },
        {
          key: "diet",
          label: "Dietary Restrictions",
          type: "select",
          options: ["None", "Vegan", "Halal", "Gluten-free"],
        },
        { key: "medical", label: "Medical Conditions", type: "textarea" },
      ],
      validate: (vals) => {
        const errs = {};
        if (!vals.passengerId) errs.passengerId = "Required";
        if (vals.nameCorrection && vals.nameCorrection.trim().length > 3) {
          errs._warn = "Name change > 3 characters triggers manual review.";
        }
        if (vals.docExpired === true && !vals.docUpload) {
          errs._form = "Expired documents block updates until renewed.";
        }
        return errs;
      },
      hints: () => ["Major name changes require ID proof."],
      defaults: { diet: "None", wheelchair: false, docExpired: false },
    },
  },

  vehicle: {
    add: {
      title: "Add Vehicle",
      fields: [
        {
          key: "vehicleType",
          label: "Type",
          type: "select",
          required: true,
          options: ["car", "truck", "taxi", "bike", "motorcycle"],
        },
        {
          key: "plate",
          label: "License Plate Number",
          type: "text",
          required: true,
        },
        { key: "make", label: "Make", type: "text", required: true },
        { key: "model", label: "Model", type: "text", required: true },
        {
          key: "year",
          label: "Year",
          type: "number",
          required: true,
          min: 1960,
          max: new Date().getFullYear() + 1,
        },
        {
          key: "ownerName",
          label: "Owner Name (if not passenger)",
          type: "text",
        },
        {
          key: "regDoc",
          label: "Registration Document",
          type: "upload",
          required: true,
        },
        {
          key: "length",
          label: "Length (m)",
          type: "number",
          showIf: (v) => ["car", "truck", "taxi"].includes(v.vehicleType),
        },
        {
          key: "width",
          label: "Width (m)",
          type: "number",
          showIf: (v) => ["car", "truck", "taxi"].includes(v.vehicleType),
        },
        {
          key: "height",
          label: "Height (m)",
          type: "number",
          showIf: (v) => ["car", "truck", "taxi"].includes(v.vehicleType),
        },
        {
          key: "fuel",
          label: "Fuel Type",
          type: "select",
          options: ["Petrol", "Diesel", "Electric"],
          showIf: (v) => ["car", "truck", "taxi"].includes(v.vehicleType),
        },
        {
          key: "engineCc",
          label: "Engine Capacity (cc)",
          type: "number",
          showIf: (v) => ["bike", "motorcycle"].includes(v.vehicleType),
        },
        {
          key: "helmets",
          label: "Helmet Count",
          type: "number",
          showIf: (v) => ["bike", "motorcycle"].includes(v.vehicleType),
        },
      ],
      validate: (vals) => {
        const errs = {};
        for (const f of MOD_SCHEMA.vehicle.add.fields) {
          const needs = f.required && (f.showIf ? f.showIf(vals) : true);
          if (needs && !String(vals[f.key] ?? "").trim())
            errs[f.key] = "Required";
        }
        const oversize =
          Number(vals.length) > 5 ||
          Number(vals.width) > 2.2 ||
          Number(vals.height) > 2.5 ||
          vals.vehicleType === "truck";
        if (oversize)
          errs._warn =
            "Oversized vehicles may require approval and additional pricing.";
        return errs;
      },
      hints: (vals) => {
        const notes = ["Vehicle type affects pricing (trucks > bikes)."];
        if (["truck"].includes(vals.vehicleType))
          notes.push("Truck pricing is higher by default.");
        return notes;
      },
      defaults: { vehicleType: "car" },
    },
    remove: {
      title: "Remove Vehicle",
      fields: [
        {
          key: "vehicleId",
          label: "Select Vehicle",
          type: "select",
          required: true,
          optionsFrom: "vehicles",
        },
        {
          key: "reason",
          label: "Reason",
          type: "select",
          options: ["", "Sold", "Not traveling", "Other"],
        },
      ],
      validate: (vals) => {
        const errs = {};
        if (!vals.vehicleId) errs.vehicleId = "Required";
        return errs;
      },
      hints: () => ["Refund calculated if vehicle fee was prepaid."],
      defaults: {},
    },
    update: {
      title: "Update Vehicle",
      fields: [
        {
          key: "vehicleId",
          label: "Select Vehicle",
          type: "select",
          required: true,
          optionsFrom: "vehicles",
        },
        { key: "plate", label: "New License Plate", type: "text" },
        {
          key: "plateDoc",
          label: "New Plate Document",
          type: "upload",
          showIf: (v) => !!v.plate,
        },
        { key: "ownerTransfer", label: "New Owner Name", type: "text" },
        {
          key: "ownerIdProof",
          label: "New Owner ID Proof",
          type: "upload",
          showIf: (v) => !!v.ownerTransfer,
        },
        { key: "length", label: "Length (m)", type: "number" },
        { key: "width", label: "Width (m)", type: "number" },
        { key: "height", label: "Height (m)", type: "number" },
      ],
      validate: (vals) => {
        const errs = {};
        if (!vals.vehicleId) errs.vehicleId = "Required";
        if (vals.plate && !vals.plateDoc)
          errs._form = "New plate requires document upload.";
        const dimensionChanged = ["length", "width", "height"].some(
          (k) => vals[k] && Number(vals[k]) > 0
        );
        if (dimensionChanged)
          errs._warn = "Dimension changes may require re-pricing.";
        return errs;
      },
      hints: () => [],
      defaults: {},
    },
  },

  cabin: {
    add: {
      title: "Add Cabin",
      fields: [
        {
          key: "cabinType",
          label: "Cabin Type",
          type: "select",
          required: true,
          options: ["Economy", "Private", "Suite"],
        },
        {
          key: "beds",
          label: "Bed Configuration",
          type: "select",
          required: true,
          options: ["Single", "Double", "Bunk"],
        },
        { key: "exclusive", label: "Exclusive Use", type: "checkbox" },
        {
          key: "access",
          label: "Accessibility — Wheelchair ramp",
          type: "checkbox",
        },
      ],
      validate: (vals) => {
        const errs = {};
        if (!vals.cabinType) errs.cabinType = "Required";
        if (!vals.beds) errs.beds = "Required";
        return errs;
      },
      hints: (vals) => {
        const notes = ["Limited availability per journey."];
        if (vals.exclusive) notes.push("Exclusive cabins cost 2× shared rate.");
        return notes;
      },
      defaults: {
        cabinType: "Economy",
        beds: "Single",
        exclusive: false,
        access: false,
      },
    },
    remove: {
      title: "Remove Cabin",
      fields: [
        {
          key: "cabinId",
          label: "Select Cabin",
          type: "select",
          required: true,
          optionsFrom: "cabins",
        },
      ],
      validate: (vals, ctx) => {
        const errs = {};
        if (!vals.cabinId) errs.cabinId = "Required";
        if (ctx.hoursToDeparture !== null && ctx.hoursToDeparture <= 48) {
          errs._warn =
            "Cancel ≤48h before departure may not be fully refundable.";
        }
        return errs;
      },
      hints: () => ["Full refund if canceled >48h before departure."],
      defaults: {},
    },
    update: {
      title: "Update Cabin",
      fields: [
        {
          key: "cabinId",
          label: "Select Cabin",
          type: "select",
          required: true,
          optionsFrom: "cabins",
        },
        {
          key: "upgrade",
          label: "Upgrade/Downgrade Type",
          type: "select",
          options: ["None", "Economy", "Private", "Suite"],
        },
        {
          key: "addBeds",
          label: "Add Beds (max 4)",
          type: "number",
          min: 0,
          max: 4,
        },
      ],
      validate: (vals) => {
        const errs = {};
        if (!vals.cabinId) errs.cabinId = "Required";
        if (Number(vals.addBeds || 0) > 4)
          errs.addBeds = "Max capacity is 4 beds per cabin.";
        return errs;
      },
      hints: () => ["Price difference calculated during review."],
      defaults: { upgrade: "None", addBeds: 0 },
    },
  },

  seat: {
    add: {
      title: "Add Seat",
      fields: [
        {
          key: "quantity",
          label: "Quantity (max 6)",
          type: "number",
          required: true,
          min: 1,
          max: 6,
        },
        {
          key: "pref",
          label: "Preference",
          type: "select",
          options: ["None", "Window", "Aisle", "Extra Legroom"],
        },
      ],
      validate: (vals) => {
        const errs = {};
        if (!vals.quantity || Number(vals.quantity) < 1)
          errs.quantity = "At least 1 seat";
        if (Number(vals.quantity) > 6) errs.quantity = "Max 6 per booking";
        return errs;
      },
      hints: (vals) => {
        const notes = [];
        if (vals.pref === "Extra Legroom")
          notes.push("Extra legroom seats cost 20% more.");
        return notes;
      },
      defaults: { quantity: 1, pref: "None" },
    },
    remove: {
      title: "Remove Seat",
      fields: [
        {
          key: "seatIds",
          label: "Select Seat Numbers",
          type: "multiselect",
          required: true,
          optionsFrom: "seats",
        },
      ],
      validate: (vals) => {
        const errs = {};
        if (!vals.seatIds || vals.seatIds.length === 0)
          errs.seatIds = "Select at least one";
        return errs;
      },
      hints: () => [],
      defaults: { seatIds: [] },
    },
    update: {
      title: "Update Seat",
      fields: [
        {
          key: "seatId",
          label: "Reassign Seat (pick one)",
          type: "select",
          required: true,
          optionsFrom: "seats",
        },
        {
          key: "nearRestroom",
          label: "Preference — Near restroom",
          type: "checkbox",
        },
      ],
      validate: (vals) => {
        const errs = {};
        if (!vals.seatId) errs.seatId = "Required";
        return errs;
      },
      hints: () => ["Interactive seat map can be integrated here later."],
      defaults: { nearRestroom: false },
    },
  },

  date: {
    change: {
      title: "Change Departure/Return Date",
      fields: [
        { key: "currentDate", label: "Current Date", type: "display" },
        {
          key: "newDate",
          label: "New Requested Date",
          type: "date",
          required: true,
        },
        {
          key: "flex3",
          label: "Accept dates within 3 days if unavailable",
          type: "checkbox",
        },
      ],
      validate: (vals, ctx) => {
        const errs = {};
        if (!vals.newDate) errs.newDate = "Required";
        if (ctx.hoursToDeparture !== null && ctx.hoursToDeparture < 24) {
          errs._form = "Same-day changes (<24h) are restricted.";
        }
        return errs;
      },
      hints: () => ["Fees may apply if the new date has higher pricing."],
      defaults: { flex3: false },
    },
  },

  // NEW: Cancellation
  cancel: {
    full: {
      title: "Cancel Entire Booking",
      fields: [
        {
          key: "confirmFull",
          label: "I want to cancel the entire booking",
          type: "checkbox",
          required: true,
        },
        {
          key: "reason",
          label: "Reason",
          type: "select",
          required: true,
          options: ["Change of plans", "Price", "Illness", "Weather", "Other"],
        },
        {
          key: "ack",
          label: "I acknowledge applicable cancellation fees/refund rules",
          type: "checkbox",
          required: true,
        },
      ],
      validate: (vals) => {
        const errs = {};
        if (!vals.confirmFull) errs.confirmFull = "Required";
        if (!vals.reason) errs.reason = "Required";
        if (!vals.ack) errs.ack = "Required";
        return errs;
      },
      hints: (vals, ctx) => {
        const notes = [];
        if (ctx.hoursToDeparture !== null && ctx.hoursToDeparture <= 48)
          notes.push(
            "Cancellations ≤48h before departure may be partially refundable."
          );
        if (ctx.international)
          notes.push(
            "International fares may have stricter cancellation penalties."
          );
        return notes;
      },
      defaults: { confirmFull: false, ack: false },
    },
    aller: {
      title: "Cancel Outbound (Aller)",
      fields: [
        {
          key: "confirmAller",
          label: "I want to cancel the outbound (Aller) leg",
          type: "checkbox",
          required: true,
        },
        {
          key: "reason",
          label: "Reason",
          type: "select",
          required: true,
          options: ["Change of plans", "Price", "Illness", "Weather", "Other"],
        },
        {
          key: "ack",
          label: "I acknowledge applicable cancellation fees/refund rules",
          type: "checkbox",
          required: true,
        },
      ],
      validate: (vals, ctx) => {
        const errs = {};
        if (!vals.confirmAller) errs.confirmAller = "Required";
        if (!vals.reason) errs.reason = "Required";
        if (!vals.ack) errs.ack = "Required";
        if (ctx.hoursToDeparture !== null && ctx.hoursToDeparture < 24) {
          errs._warn = "Same-day outbound cancellation may not be refundable.";
        }
        return errs;
      },
      hints: () => [
        "Outbound leg cancellations may affect return eligibility depending on fare rules.",
      ],
      defaults: { confirmAller: false, ack: false },
    },
    retour: {
      title: "Cancel Return (Retour)",
      fields: [
        {
          key: "confirmRetour",
          label: "I want to cancel the return (Retour) leg",
          type: "checkbox",
          required: true,
        },
        {
          key: "reason",
          label: "Reason",
          type: "select",
          required: true,
          options: ["Change of plans", "Price", "Illness", "Weather", "Other"],
        },
        {
          key: "ack",
          label: "I acknowledge applicable cancellation fees/refund rules",
          type: "checkbox",
          required: true,
        },
      ],
      validate: (vals) => {
        const errs = {};
        if (!vals.confirmRetour) errs.confirmRetour = "Required";
        if (!vals.reason) errs.reason = "Required";
        if (!vals.ack) errs.ack = "Required";
        return errs;
      },
      hints: () => [
        "Return leg cancellations may be non-refundable under some policies.",
      ],
      defaults: { confirmRetour: false, ack: false },
    },
  },
};

/* =======================
 * GENERIC FIELD RENDERER
 * ======================= */

const Field = ({ def, value, onChange, ctx }) => {
  const visible = def.showIf ? def.showIf(ctx.values) : true;
  if (!visible) return null;

  const common =
    "w-full rounded-xl border-2 border-gray-200 p-3 focus:border-nouris focus:ring-2 focus:ring-nouris/20";

  if (def.type === "display") {
    return (
      <div className="p-3 rounded-xl bg-gray-50 border border-gray-200">
        <div className="text-sm text-gray-500">{def.label}</div>
        <div className="mt-1 text-gray-800">{String(value ?? "-")}</div>
      </div>
    );
  }

  if (def.type === "textarea") {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {def.label}
          {def.required ? " *" : ""}
        </label>
        <textarea
          rows={3}
          className={common}
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={def.placeholder}
        />
      </div>
    );
  }

  if (def.type === "checkbox") {
    return (
      <label className="flex items-center gap-3 select-none">
        <input
          type="checkbox"
          className="h-5 w-5 rounded border-gray-300 text-nouris focus:ring-nouris"
          checked={!!value}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className="text-sm text-gray-800">{def.label}</span>
      </label>
    );
  }

  if (def.type === "select" || def.type === "multiselect") {
    const options =
      def.optionsFrom === "passengers"
        ? DEMO_BOOKING.passengers.map((p) => ({ label: p.name, value: p.id }))
        : def.optionsFrom === "vehicles"
          ? DEMO_BOOKING.vehicles.map((v) => ({
              label: `${v.plate} (${v.make} ${v.model})`,
              value: v.id,
            }))
          : def.optionsFrom === "cabins"
            ? DEMO_BOOKING.cabins.map((c) => ({
                label: `${c.type} ${c.number}`,
                value: c.id,
              }))
            : def.optionsFrom === "seats"
              ? DEMO_BOOKING.seats.map((s) => ({
                  label: s.seatNumber,
                  value: s.id,
                }))
              : (def.options || []).map((o) => ({ label: o, value: o }));

    if (def.type === "multiselect") {
      return (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {def.label}
            {def.required ? " *" : ""}
          </label>
          <select
            multiple
            className={common}
            value={value || []}
            onChange={(e) =>
              onChange(Array.from(e.target.selectedOptions).map((o) => o.value))
            }
          >
            {options.map((op) => (
              <option key={op.value} value={op.value}>
                {op.label}
              </option>
            ))}
          </select>
        </div>
      );
    }

    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {def.label}
          {def.required ? " *" : ""}
        </label>
        <select
          className={common}
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
        >
          {def.required ? <option value="">Select…</option> : null}
          {options.map((op) => (
            <option key={op.value} value={op.value}>
              {op.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  if (def.type === "upload") {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {def.label}
          {def.required ? " *" : ""}
        </label>
        <input
          type="text"
          className={common}
          placeholder="(Demo) paste file path or URL"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  }

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {def.label}
        {def.required ? " *" : ""}
      </label>
      <input
        type={def.type || "text"}
        min={def.min}
        max={def.max}
        className={common}
        placeholder={def.placeholder}
        value={value ?? ""}
        onChange={(e) =>
          onChange(
            def.type === "number" ? e.target.valueAsNumber : e.target.value
          )
        }
      />
    </div>
  );
};

const FormRenderer = ({ trip, type, action, values, onChange, ctx }) => {
  const node = MOD_SCHEMA?.[type]?.[action];
  if (!node) return <div>Unsupported form.</div>;

  return (
    <div className="space-y-4">
      {node.fields.map((f) => (
        <Field
          key={f.key}
          def={f}
          value={values[f.key]}
          onChange={(v) => onChange({ ...values, [f.key]: v })}
          ctx={{ ...ctx, values }}
        />
      ))}
    </div>
  );
};

/* =======================
 * PAGE (Flow & Logic)
 * ======================= */

export default function ModificationPage() {
  // Steps
  const [step, setStep] = useState(0);

  // Step 0: booking
  const [form, setForm] = useState({
    bookingNumber: "",
    lastName: "",
    email: "",
  });

  // Step 1: trips
  const [trips, setTrips] = useState({ aller: false, retour: false });

  // Step 2: type selection
  const [types, setTypes] = useState({ aller: [], retour: [] });

  // Step 3: subtype selection
  const [subtypes, setSubtypes] = useState({ aller: {}, retour: {} });

  // Dynamic queue
  const [queue, setQueue] = useState([]); // [{trip,type,action}]
  const firstFormStep = 4;
  const reviewStep = firstFormStep + queue.length;

  // Per-item values
  const [data, setData] = useState({ aller: {}, retour: {} });

  // Review
  const [acceptFees, setAcceptFees] = useState(false);
  const [comments, setComments] = useState("");

  // helpers
  const updateForm = (k, v) => setForm((p) => ({ ...p, [k]: v }));
  const toggleTrip = (k) => setTrips((p) => ({ ...p, [k]: !p[k] }));

  /**
   * Toggle a type for a given trip.
   * - If the type is "date", auto-select "change".
   * - If deselecting "date", clear its subtype.
   */
  const toggleType = (trip, typeId) =>
    setTypes((prev) => {
      const already = prev[trip].includes(typeId);
      const nextTypes = {
        ...prev,
        [trip]: already
          ? prev[trip].filter((t) => t !== typeId)
          : [...prev[trip], typeId],
      };

      // Auto subtypes for "date"
      setSubtypes((prevSubs) => {
        const currTrip = prevSubs[trip] || {};
        if (!already && typeId === "date") {
          return { ...prevSubs, [trip]: { ...currTrip, date: "change" } };
        }
        if (already && typeId === "date") {
          const { date: _omit, ...rest } = currTrip;
          return { ...prevSubs, [trip]: rest };
        }
        return prevSubs;
      });

      return nextTypes;
    });

  const setSubtype = (trip, typeId, action) =>
    setSubtypes((prev) => ({
      ...prev,
      [trip]: { ...(prev[trip] || {}), [typeId]: action },
    }));

  // validations
  const bookingValid =
    form.bookingNumber.trim() &&
    form.lastName.trim() &&
    /\S+@\S+\.\S+/.test(form.email.trim());

  const currentRoute = (tripKey) =>
    tripKey === "aller"
      ? DEMO_BOOKING.routes.aller.route
      : DEMO_BOOKING.routes.retour.route;
  const hoursToDeparture = 72; // demo value

  // build queue on leaving subtype step
  const buildQueueFromState = () => {
    let q = [];
    for (const tripKey of ["aller", "retour"]) {
      // for Cancellation "full", we will include only one item regardless of trip
      types[tripKey].forEach((typeId) => {
        const action = subtypes[tripKey]?.[typeId];
        if (!action) return;

        // Guard invalid scope: only allow cancel.aller under aller, cancel.retour under retour
        if (typeId === "cancel") {
          if (action === "aller" && tripKey !== "aller") return;
          if (action === "retour" && tripKey !== "retour") return;
        }

        q.push({ trip: tripKey, type: typeId, action });
      });
    }

    // If any cancel:full exists, collapse queue to a single cancellation item
    const fullIdx = q.findIndex(
      (i) => i.type === "cancel" && i.action === "full"
    );
    if (fullIdx !== -1) {
      q = [q[fullIdx]];
    }

    return q;
  };

  // current queue item
  const currentIndex =
    step >= firstFormStep && step < reviewStep ? step - firstFormStep : -1;
  const currentItem = currentIndex >= 0 ? queue[currentIndex] : null;
  const currentValues = useMemo(() => {
    if (!currentItem) return null;
    const { trip, type, action } = currentItem;
    const node = MOD_SCHEMA?.[type]?.[action];
    const prevVals = data?.[trip]?.[`${type}:${action}`];
    return prevVals ?? (node?.defaults || {});
  }, [currentItem, data]);

  const updateCurrentValues = (vals) => {
    if (!currentItem) return;
    const { trip, type, action } = currentItem;
    setData((prev) => ({
      ...prev,
      [trip]: { ...(prev[trip] || {}), [`${type}:${action}`]: vals },
    }));
  };

  // validation for current form step
  const currentErrors = useMemo(() => {
    if (!currentItem || !currentValues) return {};
    const { trip, type, action } = currentItem;
    const node = MOD_SCHEMA?.[type]?.[action];
    if (!node) return {};
    const ctx = {
      international: isInternational(currentRoute(trip)),
      currentPassengerCount: DEMO_BOOKING.passengers.length,
      hoursToDeparture,
    };
    return node.validate?.(currentValues, ctx) || {};
  }, [currentItem, currentValues]);

  const hasErrors = (errs) =>
    Object.keys(errs).some((k) => k !== "_warn") || !!errs._form;

  // can proceed
  const canProceed =
    step === 0
      ? !!bookingValid
      : step === 1
        ? trips.aller || trips.retour
        : step === 2
          ? (!trips.aller || types.aller.length > 0) &&
            (!trips.retour || types.retour.length > 0)
          : step === 3
            ? (!trips.aller ||
                types.aller.every((t) => !!subtypes.aller?.[t])) &&
              (!trips.retour ||
                types.retour.every((t) => !!subtypes.retour?.[t]))
            : step >= firstFormStep && step < reviewStep
              ? !hasErrors(currentErrors)
              : step === reviewStep
                ? acceptFees
                : true;

  // fees (simple demo)
  const totalMods = queue.length || types.aller.length + types.retour.length;
  const estimatedFees = totalMods ? FEES.base : 0;

  // next/back
  const next = () => {
    if (step === 2) {
      // ensure subtype map exists; date is handled on toggle but add fallbacks
      const init = {
        aller: { ...(subtypes.aller || {}) },
        retour: { ...(subtypes.retour || {}) },
      };
      ["aller", "retour"].forEach((tripKey) => {
        types[tripKey].forEach((t) => {
          if (!init[tripKey][t]) {
            init[tripKey][t] = t === "date" ? "change" : ""; // auto for date only
          }
        });
      });
      setSubtypes(init);
    }
    if (step === 3) {
      const built = buildQueueFromState();
      setQueue(built);
      setData((prev) => {
        const nextState = {
          aller: { ...(prev.aller || {}) },
          retour: { ...(prev.retour || {}) },
        };
        built.forEach(({ trip, type, action }) => {
          const key = `${type}:${action}`;
          if (!nextState[trip][key])
            nextState[trip][key] = MOD_SCHEMA?.[type]?.[action]?.defaults || {};
          if (type === "date" && action === "change") {
            nextState[trip][key] = {
              ...nextState[trip][key],
              currentDate:
                trip === "aller"
                  ? DEMO_BOOKING.routes.aller.date
                  : DEMO_BOOKING.routes.retour.date,
            };
          }
        });
        return nextState;
      });
      if (built.length === 0) {
        setStep(firstFormStep);
        return;
      }
    }
    setStep((s) => s + 1);
  };

  const back = () => setStep((s) => Math.max(0, s - 1));

  const submit = () => {
    const payload = {
      booking: form,
      trips,
      types,
      subtypes,
      queue,
      data,
      comments,
      estimatedFees,
      meta: { submittedAt: new Date().toISOString() },
    };
    console.log("SUBMIT", payload);
    alert("Your request has been submitted!");
  };

  // stepper labels
  const steps = useMemo(() => {
    const base = [
      {
        key: "booking",
        label: "Booking",
        description: "Enter your booking information",
      },
      {
        key: "trips",
        label: "Trips",
        description: "Select trip segments to modify",
      },
      {
        key: "types",
        label: "Types",
        description: "Choose modification types",
      },
      {
        key: "subtypes",
        label: "Subtypes",
        description: "Choose actions per type",
      },
    ];
    queue.forEach((q, i) =>
      base.push({
        key: `f${i}`,
        label: TYPE_LABEL[q.type],
        description: `Fill ${TYPE_LABEL[q.type]} form`,
      })
    );
    base.push({
      key: "review",
      label: "Review",
      description: "Review your changes",
    });
    return base;
  }, [queue]);

  const headerDescription = steps[step]?.description || "";

  // small UI atoms
  const Info = ({ tone = "blue", children }) => {
    const pal =
      tone === "yellow"
        ? ["bg-yellow-50", "text-yellow-700"]
        : ["bg-blue-50", "text-blue-700"];
    return (
      <div className={cx(pal[0], "rounded-xl p-4 text-sm", pal[1])}>
        {children}
      </div>
    );
  };

  const TypeChip = ({ active, children }) => (
    <span
      className={cx(
        "px-3 py-1 rounded-full border text-sm",
        active
          ? "bg-nouris/5 border-nouris text-nouris"
          : "bg-white border-gray-200 text-gray-700"
      )}
    >
      {children}
    </span>
  );

  const Stepper = () => (
    <div className="flex justify-between px-6 py-4 bg-gray-50 border-b">
      {steps.map((s, i) => (
        <div
          key={s.key}
          className={cx(
            "flex flex-col items-center",
            step >= i ? "text-nouris" : "text-gray-400"
          )}
        >
          <div
            className={cx(
              "w-8 h-8 rounded-full flex items-center justify-center",
              step >= i ? "bg-nouris text-white" : "bg-gray-200"
            )}
          >
            {i + 1}
          </div>
          <span className="mt-1 text-[11px]">{s.label}</span>
        </div>
      ))}
    </div>
  );

  // RENDER
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 py-8">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-nouris to-nouris-d p-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Booking Modification Request
            </h1>
            <p className="text-nouris-light mt-1">{headerDescription}</p>
          </div>
          <div className="bg-white/20 rounded-lg px-3 py-1 text-sm font-medium text-white">
            Booking: <span className="font-mono">{DEMO_BOOKING.number}</span>
          </div>
        </div>

        {/* Progress */}
        <div className="h-2 bg-gray-200">
          <div
            className="h-full bg-nouris transition-all"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>

        {/* Stepper */}
        <Stepper />

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Step 0 */}
          {step === 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Booking Number*
                  </label>
                  <input
                    className="w-full rounded-xl border-2 border-gray-200 p-3 text-lg focus:border-nouris focus:ring-2 focus:ring-nouris/20"
                    value={form.bookingNumber}
                    onChange={(e) =>
                      updateForm("bookingNumber", e.target.value)
                    }
                    placeholder="Enter your booking number"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Last Name*
                  </label>
                  <input
                    className="w-full rounded-xl border-2 border-gray-200 p-3 text-lg focus:border-nouris focus:ring-2 focus:ring-nouris/20"
                    value={form.lastName}
                    onChange={(e) => updateForm("lastName", e.target.value)}
                    placeholder="As on booking"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Email Address*
                  </label>
                  <input
                    className="w-full rounded-xl border-2 border-gray-200 p-3 text-lg focus:border-nouris focus:ring-2 focus:ring-nouris/20"
                    value={form.email}
                    onChange={(e) => updateForm("email", e.target.value)}
                    placeholder="Used for booking confirmation"
                  />
                </div>
              </div>
              <Info>
                We’ll send a confirmation to this email address once your
                request is processed.
              </Info>
            </>
          )}

          {/* Step 1 */}
          {step === 1 && (
            <>
              <h3 className="text-xl font-bold text-gray-800">
                Which trip segments would you like to modify?
              </h3>
              <p className="text-gray-600">
                Select one or both segments. (Full cancellation can be picked
                later.)
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["aller", "retour"].map((k) => {
                  const r = DEMO_BOOKING.routes[k];
                  return (
                    <button
                      key={k}
                      type="button"
                      className={cx(
                        card,
                        "text-left",
                        trips[k]
                          ? "border-nouris bg-nouris/5"
                          : "border-gray-200 hover:border-gray-300"
                      )}
                      onClick={() => toggleTrip(k)}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          readOnly
                          checked={trips[k]}
                          className="h-5 w-5 rounded border-gray-300 text-nouris"
                        />
                        <div>
                          <div className="font-medium text-gray-800">
                            {r.title}
                          </div>
                          <div className="text-gray-600 text-sm">
                            📍 {r.route}
                          </div>
                          <div className="text-gray-600 text-sm">
                            🗓️ {r.date}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
              <Info tone="yellow">
                Policies can differ per leg (e.g., return leg refunds may
                differ).
              </Info>
            </>
          )}

          {/* Step 2: types */}
          {step === 2 && (
            <>
              <h3 className="text-xl font-bold text-gray-800">
                What would you like to modify or cancel?
              </h3>
              <p className="text-gray-600">
                Pick types per trip. Cancellation scope is chosen next.
              </p>
              {["aller", "retour"].map((tripKey) =>
                trips[tripKey] ? (
                  <div
                    key={tripKey}
                    className="border border-gray-200 rounded-xl p-5 mt-2"
                  >
                    <div className="flex items-center mb-4">
                      <div className="h-2 w-2 rounded-full bg-nouris mr-2" />
                      <h4 className="text-lg font-medium text-gray-800">
                        {tripKey === "aller"
                          ? "Outbound (Aller)"
                          : "Return (Retour)"}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {MOD_TYPES.map((t) => {
                        const active = types[tripKey].includes(t.id);
                        return (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => toggleType(tripKey, t.id)}
                          >
                            <TypeChip active={active}>
                              {t.icon} {t.label}
                            </TypeChip>
                          </button>
                        );
                      })}
                    </div>
                    {types[tripKey].includes("date") && (
                      <div className="mt-3 text-xs text-gray-600">
                        Date selected →{" "}
                        <span className="font-medium text-nouris">Change</span>{" "}
                        action applied automatically.
                      </div>
                    )}
                    {types[tripKey].includes("cancel") && (
                      <div className="mt-2 text-xs text-red-700">
                        Cancellation selected — you’ll choose <b>Full</b> or{" "}
                        <b>{tripKey === "aller" ? "Aller" : "Retour"}</b> next.
                      </div>
                    )}
                  </div>
                ) : null
              )}
            </>
          )}

          {/* Step 3: subtypes */}
          {step === 3 && (
            <>
              <h3 className="text-xl font-bold text-gray-800">
                Pick an action for each selected type
              </h3>
              <p className="text-gray-600">
                Add / Remove / Update. Date is auto‑Change. Cancellation allows
                Full or trip-specific.
              </p>
              {["aller", "retour"].map((tripKey) =>
                trips[tripKey] ? (
                  <div
                    key={tripKey}
                    className="border border-gray-200 rounded-xl p-5 mt-2"
                  >
                    <div className="flex items-center mb-4">
                      <div className="h-2 w-2 rounded-full bg-nouris mr-2" />
                      <h4 className="text-lg font-medium text-gray-800">
                        {tripKey === "aller"
                          ? "Outbound (Aller)"
                          : "Return (Retour)"}
                      </h4>
                    </div>
                    <div className="space-y-3">
                      {types[tripKey].map((typeId) => {
                        const label = TYPE_LABEL[typeId];
                        let actions =
                          typeId === "date"
                            ? [{ k: "change", txt: "Change", disabled: true }]
                            : typeId === "cancel"
                              ? tripKey === "aller"
                                ? [
                                    { k: "full", txt: "Full" },
                                    { k: "aller", txt: "Aller Only" },
                                  ]
                                : [
                                    { k: "full", txt: "Full" },
                                    { k: "retour", txt: "Retour Only" },
                                  ]
                              : [
                                  { k: "add", txt: "Add" },
                                  { k: "remove", txt: "Remove" },
                                  { k: "update", txt: "Update" },
                                ];
                        const picked = subtypes[tripKey]?.[typeId] || "";
                        return (
                          <div
                            key={typeId}
                            className="flex items-center justify-between"
                          >
                            <div className="font-medium text-gray-800">
                              {label}
                            </div>
                            <div className="flex gap-2">
                              {actions.map((a) => (
                                <button
                                  key={a.k}
                                  type="button"
                                  disabled={a.disabled}
                                  className={cx(
                                    "px-3 py-1 rounded-full border text-sm",
                                    a.disabled
                                      ? "opacity-60 cursor-not-allowed"
                                      : picked === a.k
                                        ? "bg-nouris/5 border-nouris text-nouris"
                                        : "bg-white border-gray-200 text-gray-700"
                                  )}
                                  onClick={() =>
                                    !a.disabled &&
                                    setSubtype(tripKey, typeId, a.k)
                                  }
                                >
                                  {a.txt}
                                </button>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                      {types[tripKey].length === 0 && (
                        <div className="text-sm text-gray-500">
                          No types selected.
                        </div>
                      )}
                    </div>
                    {types[tripKey].includes("cancel") && (
                      <div className="mt-3 text-xs text-red-700">
                        Selecting <b>Full</b> cancellation will ignore all other
                        modifications in this request.
                      </div>
                    )}
                  </div>
                ) : null
              )}
            </>
          )}

          {/* Dynamic forms */}
          {step >= firstFormStep &&
            step < reviewStep &&
            currentItem &&
            currentValues && (
              <>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-800">
                    {currentItem.trip === "aller"
                      ? "Outbound (Aller)"
                      : "Return (Retour)"}{" "}
                    — {MOD_SCHEMA[currentItem.type][currentItem.action].title}
                  </h3>
                  <div className="text-sm text-gray-500">
                    {currentIndex + 1} / {queue.length}
                  </div>
                </div>

                <Hints
                  type={currentItem.type}
                  action={currentItem.action}
                  values={currentValues}
                  route={currentRoute(currentItem.trip)}
                />

                <div className="border border-gray-200 rounded-xl p-5">
                  <FormRenderer
                    trip={currentItem.trip}
                    type={currentItem.type}
                    action={currentItem.action}
                    values={currentValues}
                    onChange={updateCurrentValues}
                    ctx={{
                      route: currentRoute(currentItem.trip),
                      values: currentValues,
                    }}
                  />
                </div>

                <Errors errors={currentErrors} />
              </>
            )}

          {/* Review */}
          {step === reviewStep && (
            <>
              <h3 className="text-xl font-bold text-gray-800">
                Review & Submit
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl border p-4">
                  <div className="font-medium text-gray-800 mb-2">Booking</div>
                  <div className="text-sm text-gray-600">
                    Number: {form.bookingNumber || DEMO_BOOKING.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    Email: {form.email || DEMO_BOOKING.email}
                  </div>
                  <div className="text-sm text-gray-600">
                    Phone: {DEMO_BOOKING.phone}
                  </div>
                </div>
                <div className="rounded-xl border p-4">
                  <div className="font-medium text-gray-800 mb-2">Summary</div>
                  <div className="text-sm text-gray-600">
                    Total Items: {queue.length}
                  </div>
                  <div className="text-sm text-gray-600">
                    Estimated Fees:{" "}
                    {estimatedFees.toLocaleString(undefined, {
                      style: "currency",
                      currency: "USD",
                    })}
                  </div>
                </div>
              </div>

              <div className="rounded-xl border p-4">
                <div className="font-medium text-gray-800 mb-3">Details</div>
                <div className="space-y-3 text-sm text-gray-700">
                  {queue.map((q, i) => {
                    const key = `${q.type}:${q.action}`;
                    const vals = data[q.trip][key];
                    return (
                      <div key={i} className="border-b pb-2">
                        <div className="font-medium">
                          {q.trip === "aller" ? "Aller" : "Retour"} —{" "}
                          {MOD_SCHEMA[q.type][q.action].title}
                        </div>
                        <div className="mt-1 text-gray-600 whitespace-pre-wrap">
                          {summarizeValues(q.type, q.action, vals)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-4">
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-nouris"
                    checked={acceptFees}
                    onChange={(e) => setAcceptFees(e.target.checked)}
                  />
                  <span className="text-sm text-blue-800">
                    I confirm that all information provided is accurate and I
                    accept any applicable fees for these
                    modifications/cancellations.
                  </span>
                </label>
              </div>

              <div className="rounded-xl border p-4">
                <div className="font-medium text-gray-800 mb-2">
                  Additional Comments
                </div>
                <textarea
                  rows={3}
                  className="w-full rounded-xl border-2 border-gray-200 p-3 focus:border-nouris focus:ring-2 focus:ring-nouris/20"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="Add any additional comments or special requests..."
                />
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t flex gap-3 justify-between">
          <div>
            {step > 0 && (
              <button
                className="px-6 py-3 rounded-xl border-2 border-gray-300 font-medium text-gray-700 hover:bg-gray-50"
                onClick={back}
              >
                Back
              </button>
            )}
          </div>
          <div>
            {step === reviewStep ? (
              <button
                className={cx(
                  "px-6 py-3 rounded-xl font-medium text-white",
                  acceptFees
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-gray-400 cursor-not-allowed"
                )}
                disabled={!acceptFees}
                onClick={submit}
              >
                Submit Request
              </button>
            ) : (
              <button
                className={cx(
                  "px-6 py-3 rounded-xl font-medium text-white",
                  canProceed
                    ? "bg-nouris hover:bg-nouris-dark"
                    : "bg-gray-400 cursor-not-allowed"
                )}
                disabled={!canProceed}
                onClick={next}
              >
                {step < firstFormStep
                  ? "Continue"
                  : step === reviewStep - 1
                    ? "Go to Review"
                    : "Next"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =======================
 * Small helpers: hints & errors & summary
 * ======================= */

function Hints({ type, action, values, route }) {
  const node = MOD_SCHEMA?.[type]?.[action];
  if (!node?.hints) return null;
  const notes = node.hints(values, {
    international: isInternational(route),
  });
  if (!notes || notes.length === 0) return null;
  return (
    <div className="bg-yellow-50 rounded-xl p-3 text-sm text-yellow-700">
      {notes.map((n, i) => (
        <div key={i}>• {n}</div>
      ))}
    </div>
  );
}

function Errors({ errors }) {
  const keys = Object.keys(errors || {}).filter(
    (k) => k !== "_warn" && k !== "_form"
  );
  const warn = errors?._warn;
  const form = errors?._form;
  if (!warn && !form && keys.length === 0) return null;
  return (
    <div className="space-y-2">
      {form && (
        <div className="bg-red-50 text-red-700 text-sm rounded-xl p-3">
          {form}
        </div>
      )}
      {warn && (
        <div className="bg-yellow-50 text-yellow-700 text-sm rounded-xl p-3">
          {warn}
        </div>
      )}
      {keys.length > 0 && (
        <div className="bg-red-50 text-red-700 text-sm rounded-xl p-3">
          {keys.map((k) => (
            <div key={k}>
              • {k}: {errors[k]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function summarizeValues(type, action, v = {}) {
  const kv = (k) =>
    v[k] != null && v[k] !== ""
      ? `${k}: ${Array.isArray(v[k]) ? v[k].join(", ") : v[k]}`
      : null;
  const keep = (arr) => arr.filter(Boolean).join("\n");

  if (type === "passenger" && action === "add") {
    return keep([
      kv("fullName"),
      kv("dob"),
      kv("nationality"),
      kv("docType"),
      kv("docNumber"),
      kv("docExpiry"),
      kv("docCountry"),
      kv("email"),
      kv("phone"),
      v.wheelchair ? "wheelchair: yes" : null,
      kv("diet"),
      kv("medical"),
    ]);
  }
  if (type === "passenger" && action === "remove") {
    return keep([kv("passengerId"), kv("reason")]);
  }
  if (type === "passenger" && action === "update") {
    return keep([
      kv("passengerId"),
      kv("nameCorrection"),
      kv("email"),
      kv("phone"),
      v.wheelchair ? "wheelchair: yes" : null,
      kv("diet"),
      kv("medical"),
      kv("docUpload"),
    ]);
  }

  if (type === "vehicle" && action === "add") {
    return keep([
      kv("vehicleType"),
      kv("plate"),
      kv("make"),
      kv("model"),
      kv("year"),
      kv("ownerName"),
      kv("regDoc"),
      kv("length"),
      kv("width"),
      kv("height"),
      kv("fuel"),
      kv("engineCc"),
      kv("helmets"),
    ]);
  }
  if (type === "vehicle" && action === "remove") {
    return keep([kv("vehicleId"), kv("reason")]);
  }
  if (type === "vehicle" && action === "update") {
    return keep([
      kv("vehicleId"),
      kv("plate"),
      kv("plateDoc"),
      kv("ownerTransfer"),
      kv("ownerIdProof"),
      kv("length"),
      kv("width"),
      kv("height"),
    ]);
  }

  if (type === "cabin" && action === "add") {
    return keep([
      kv("cabinType"),
      kv("beds"),
      v.exclusive ? "exclusive: yes" : null,
      v.access ? "accessibility: yes" : null,
    ]);
  }
  if (type === "cabin" && action === "remove") {
    return keep([kv("cabinId")]);
  }
  if (type === "cabin" && action === "update") {
    return keep([kv("cabinId"), kv("upgrade"), kv("addBeds")]);
  }

  if (type === "seat" && action === "add") {
    return keep([kv("quantity"), kv("pref")]);
  }
  if (type === "seat" && action === "remove") {
    return keep([kv("seatIds")]);
  }
  if (type === "seat" && action === "update") {
    return keep([kv("seatId"), v.nearRestroom ? "near restroom: yes" : null]);
  }

  if (type === "date" && action === "change") {
    return keep([
      kv("currentDate"),
      kv("newDate"),
      v.flex3 ? "flex: ±3 days" : null,
    ]);
  }

  // NEW: Cancellation summaries
  if (type === "cancel" && action === "full") {
    return keep([
      v.confirmFull ? "confirm: full booking" : null,
      kv("reason"),
      v.ack ? "acknowledged" : null,
    ]);
  }
  if (type === "cancel" && action === "aller") {
    return keep([
      v.confirmAller ? "confirm: Aller" : null,
      kv("reason"),
      v.ack ? "acknowledged" : null,
    ]);
  }
  if (type === "cancel" && action === "retour") {
    return keep([
      v.confirmRetour ? "confirm: Retour" : null,
      kv("reason"),
      v.ack ? "acknowledged" : null,
    ]);
  }

  return JSON.stringify(v, null, 2);
}
