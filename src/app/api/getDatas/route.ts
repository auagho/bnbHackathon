import { NextRequest, NextResponse } from "next/server";

import executeQuery from "@/app/_lib/db";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const systemId = url.searchParams.get("system_id");

  if (!systemId) {
    return new Response(JSON.stringify({ error: "System ID is required" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const data = await executeQuery(
    `WITH spaces AS (
      SELECT * 
      FROM spaces 
      WHERE use_yn = 'Y' 
  ), 
  s_dev AS (
      SELECT * 
      FROM space_devices 
      WHERE end_dt > CURRENT_TIMESTAMP 
      AND dev_name = '그린스테이션'
  ) 
  SELECT 
      s.space_name, 
      c_sd.dev_name, 
      d.system_id, 
      d.dev_type, 
      h.temperature, 
      h.humidity, 
      h.co2, 
      h.pm10, 
      h.pm25, 
      h.pm01, 
      h.tvoc, 
      h.batt_level, 
      h.measure_dt 
  FROM 
      spaces s 
  INNER JOIN 
      s_dev sd ON s.space_id = sd.space_id 
  LEFT JOIN 
      s_dev c_sd ON sd.dev_id = c_sd.parent_dev_id OR sd.dev_id = c_sd.dev_id 
  INNER JOIN 
      devices d ON d.dev_id = c_sd.dev_id 
  INNER JOIN 
      device_measure_hists h ON d.dev_id = h.dev_id 
  WHERE 
      h.measure_dt >= STR_TO_DATE('2024-03-06 03:22:00', '%Y-%m-%d %T') 
      AND d.system_id = ?
  ORDER BY 
      h.measure_dt DESC;`,
    [systemId],
  );

  return NextResponse.json({ data });
}
